browser.browserAction.onClicked.addListener(function (tab) {
  const url = new URL(tab.url)

  url.protocol = 'http'
  url.host = 'localhost'
  url.port = 3000

  browser.tabs.update(tab.id, { url: url.href })
})
