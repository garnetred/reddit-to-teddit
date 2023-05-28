chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  let tabUrl = tab.url ?? tab.pendingUrl;
  let fullUrl = tabUrl.split('?')
  const queryParams = fullUrl[1]
  let domainOnlyUrl = fullUrl[0];
  if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    tabUrl.includes('reddit.com')
  ) {
    console.log('domain url', domainOnlyUrl)
    const tabUrlMinusR = domainOnlyUrl.replace('r', 't')
    const tedditUrl = tabUrlMinusR.replace('com', 'net')
    const newUrl = queryParams ? `${tedditUrl}?${queryParams}` : tedditUrl;
    chrome.tabs.update(tabId, { url: newUrl });
  }
});
