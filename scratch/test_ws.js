const { execSync } = require('child_process');
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const base = 'C:\\Users\\Rushi\\.gemini\\antigravity-ide\\brain\\1644ec2b-3124-4eb1-98e5-29ef01ecaab2';

const testHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0; background:#111;">
<script>
window.location.href = "http://localhost:4321/";
</script>
</body>
</html>
`;
require('fs').writeFileSync(`${base}\\scratch\\nav_test.html`, testHtml);

// We run Chrome with remote debugging and evaluate what happens when next is clicked!
const puppeteerScript = `
const http = require('http');
const { spawn } = require('child_process');

const chrome = 'C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe';
const p = spawn(chrome, [
  '--headless=new',
  '--remote-debugging-port=9223',
  '--window-size=1200,800',
  'http://localhost:4321/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://localhost:9223/json');
    const pages = await listRes.json();
    console.log('Pages:', pages.length);
    const page = pages.find(p => p.url.includes('4321'));
    if (!page) { console.log('Page not found'); return; }

    const WebSocket = require('ws'); // let's see if we can use fetch/devtools
  } catch(e) {
    console.log('Error:', e.message);
  } finally {
    p.kill();
  }
}, 3000);
`;
