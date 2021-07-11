(function () {
  window.onload = function () {
    const el = document.querySelector('#root');
    el.addEventListener('click', function (e) {
      switch (e.target.dataset.item) {
        case 'google': {
          chrome.tabs.create({
            url: 'https://www.google.com'
          });
          break;
        }
        case 'bing': {
          chrome.tabs.create({
            url: 'https://cn.bing.com'
          });
          break;
        }
        case 'baidu': {
          chrome.tabs.create({
            url: 'https://www.baidu.com'
          });
          break;
        }
        case 'sogou': {
          chrome.tabs.create({
            url: 'https://www.sogou.com'
          });
          break;
        }
        case 'so': {
          chrome.tabs.create({
            url: 'https://www.so.com'
          });
          break;
        }
        case 'qwant': {
          chrome.tabs.create({
            url: 'https://www.qwant.com'
          });
          break;
        }
        default: {
          break;
        }
      }
    });
  };
})();
