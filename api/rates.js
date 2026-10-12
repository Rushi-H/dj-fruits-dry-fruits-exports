// Serverless API proxy for Agmarknet on data.gov.in
// Resource ID: 9ef84268d588465aa308a864a43d0070

export default async function handler(req, res) {
  // Set CORS and Vercel Edge caching headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { state = 'Maharashtra', market = '', commodity = '' } = req.query || {};

  // Whitelist check
  const allowedStates = ['Maharashtra', 'Gujarat', 'Karnataka', 'Madhya Pradesh'];
  if (!allowedStates.includes(state)) {
    return res.status(400).json({ error: 'Invalid or unsupported state parameter' });
  }

  const apiKey = process.env.DATA_GOV_API_KEY;
  if (!apiKey) {
    // Graceful fallback notice if environment variable is not configured yet
    return res.status(200).json({
      fallback: true,
      message: 'API key not configured in environment (DATA_GOV_API_KEY missing). Use client fallback dataset.',
      records: []
    });
  }

  try {
    const params = new URLSearchParams({
      'api-key': apiKey,
      format: 'json',
      offset: '0',
      limit: '50',
      'filters[state]': state
    });

    if (market) params.append('filters[market]', market);
    if (commodity) params.append('filters[commodity]', commodity);

    const url = `https://api.data.gov.in/resource/9ef84268d588465aa308a864a43d0070?${params.toString()}`;
    const response = await fetch(url, { headers: { 'User-Agent': 'DJFruitsExports/1.0' } });

    if (!response.ok) {
      throw new Error(`Data.gov.in upstream HTTP ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(502).json({
      error: 'Upstream gateway failure',
      message: err.message,
      fallback: true
    });
  }
}
