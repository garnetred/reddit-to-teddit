chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  let tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    tabUrl.includes('twitter.com')
  ) {
     chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ['css/global.css'],
    });
  }
});
