// Serverless API proxy for Agmarknet on data.gov.in
// Resource ID: 9ef84268d588465aa308a864a43d0070

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return res.status(200).json({
    status: 'private',
    message: 'DJ Fruits procures produce directly from growers. Purchase rates are provided privately upon lot inspection and brix grading.',
    contact: 'https://wa.me/919130659595'
  });
}
