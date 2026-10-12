const { spawn } = require('child_process');

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const p = spawn(chrome, [
  '--headless=new',
  '--remote-debugging-port=9224',
  '--window-size=1200,800',
  'http://localhost:4321/'
]);

setTimeout(async () => {
  try {
    const list = await (await fetch('http://localhost:9224/json')).json();
    const target = list.find(x => x.type === 'page');
    console.log('Target WS:', target.webSocketDebuggerUrl);

    const ws = new WebSocket(target.webSocketDebuggerUrl);
    ws.onopen = () => {
      console.log('WS OPENED');
      
      let id = 1;
      const send = (method, params = {}) => {
        ws.send(JSON.stringify({ id: id++, method, params }));
      };

      send('Runtime.enable');
      send('Console.enable');

      ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        if (data.method === 'Runtime.consoleAPICalled') {
          console.log('[BROWSER CONSOLE]', data.params.type, data.params.args.map(a => a.value ?? a.description).join(' '));
        } else if (data.method === 'Runtime.exceptionThrown') {
          console.log('[BROWSER EXCEPTION]', data.params.exceptionDetails.text, data.params.exceptionDetails.exception?.description);
        } else if (data.id === 10) {
          console.log('[EVAL RESULT 10]:', data.result?.result?.value);
        } else if (data.id === 11) {
          console.log('[EVAL RESULT 11]:', data.result?.result?.value);
        }
      };

      // Let's scroll into view and click
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 10,
          method: 'Runtime.evaluate',
          params: {
            expression: `(() => {
              const el = document.getElementById('fruits-3d-showcase');
              if (el) el.scrollIntoView();
              const root = document.querySelector('.wr-root');
              const img = document.querySelector('.wr-img');
              const nextBtn = document.querySelector('.wr-btn[aria-label="Next"]');
              const count = document.querySelector('.wr-count');
              return JSON.stringify({
                hasRoot: !!root,
                imgSrc: img ? img.src : null,
                hasNext: !!nextBtn,
                count: count ? count.innerText : null
              });
            })()`
          }
        }));

        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 11,
            method: 'Runtime.evaluate',
            params: {
              expression: `(() => {
                const nextBtn = document.querySelector('.wr-btn[aria-label="Next"]');
                if (nextBtn) {
                  nextBtn.click();
                  return 'CLICKED_NEXT';
                }
                return 'NO_BTN';
              })()`
            }
          }));

          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 12,
              method: 'Runtime.evaluate',
              params: {
                expression: `(() => {
                  const img = document.querySelector('.wr-img');
                  const count = document.querySelector('.wr-count');
                  const canvas = document.querySelector('canvas.wr-in');
                  return JSON.stringify({
                    imgSrc: img ? img.src : null,
                    count: count ? count.innerText : null,
                    hasCanvas: !!canvas
                  });
                })()`
              }
            }));
          }, 600);

          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 13,
              method: 'Runtime.evaluate',
              params: {
                expression: `(() => {
                  const img = document.querySelector('.wr-img');
                  const count = document.querySelector('.wr-count');
                  const canvas = document.querySelector('canvas.wr-in');
                  return JSON.stringify({
                    after2s_imgSrc: img ? img.src : null,
                    count: count ? count.innerText : null,
                    hasCanvas: !!canvas
                  });
                })()`
              }
            }));
            setTimeout(() => {
              ws.close();
              p.kill();
            }, 1000);
          }, 2600);

        }, 1000);

      }, 1500);
    };

  } catch(e) {
    console.error('Error in script:', e);
    p.kill();
  }
}, 2000);
