const { execSync } = require('child_process');
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const base = 'C:\\Users\\Rushi\\.gemini\\antigravity-ide\\brain\\1644ec2b-3124-4eb1-98e5-29ef01ecaab2';

// Let's create an evaluation script that opens the page, finds .wr-btn, clicks it, and logs state
const testScript = `
<!DOCTYPE html>
<html>
<body>
<script>
window.location.href = "http://localhost:4321/#fruits-3d-showcase";
</script>
</body>
</html>
`;

const runnerJs = `
const { execSync } = require('child_process');
const chrome = 'C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe';

const html = \`
<!DOCTYPE html>
<html>
<body style="margin:0; background:#111;">
<iframe id="f" src="http://localhost:4321/" style="width:1200px; height:800px;"></iframe>
<script>
const ifr = document.getElementById('f');
ifr.onload = () => {
  setTimeout(() => {
    try {
      const doc = ifr.contentDocument;
      const win = ifr.contentWindow;
      
      const wrRoot = doc.querySelector('.wr-root');
      console.log('WR_ROOT FOUND:', !!wrRoot);
      const img = doc.querySelector('.wr-img');
      console.log('INITIAL IMG SRC:', img ? img.src : 'null');
      
      const nextBtn = doc.querySelector('.wr-btn[aria-label="Next"]');
      console.log('NEXT BTN FOUND:', !!nextBtn);
      
      if (nextBtn) {
        nextBtn.click();
        console.log('CLICKED NEXT BTN');
      }
      
      setTimeout(() => {
        const img2 = doc.querySelector('.wr-img');
        console.log('AFTER 500MS IMG SRC:', img2 ? img2.src : 'null');
        const count = doc.querySelector('.wr-count');
        console.log('COUNT TEXT:', count ? count.textContent : 'null');
        const canvas = doc.querySelector('canvas.wr-in');
        console.log('CANVAS PRESENT:', !!canvas);
      }, 500);

      setTimeout(() => {
        const img3 = doc.querySelector('.wr-img');
        console.log('AFTER 2500MS IMG SRC:', img3 ? img3.src : 'null');
        const count3 = doc.querySelector('.wr-count');
        console.log('COUNT TEXT AFTER 2500MS:', count3 ? count3.textContent : 'null');
      }, 2500);

    } catch(err) {
      console.log('ERROR:', err.message);
    }
  }, 1000);
};
</script>
</body>
</html>
\`;

require('fs').writeFileSync('C:\\\\Users\\\\Rushi\\\\.gemini\\\\antigravity-ide\\\\brain\\\\1644ec2b-3124-4eb1-98e5-29ef01ecaab2\\\\scratch\\\\test_carousel_click.html', html);

try {
  execSync(\`"\${chrome}" --headless=new --disable-gpu --enable-logging=stderr --virtual-time-budget=6000 file:///C:/Users/Rushi/.gemini/antigravity-ide/brain/1644ec2b-3124-4eb1-98e5-29ef01ecaab2/scratch/test_carousel_click.html\`, { timeout: 12000, stdio: 'inherit' });
} catch(e) {
  console.log('Execution done');
}
`;

require('fs').writeFileSync(`${base}\\scratch\\run_carousel_test.js`, runnerJs);
