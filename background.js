browser.browserAction.onClicked.addListener(async function (tab) {
  const { protocol, host, port } = await browser.storage.local.get(['protocol', 'host', 'port'])
  const url = new URL(tab.url)

  url.protocol = protocol || 'http'
  url.host = host || 'localhost'
  url.port = port || 3000

  browser.tabs.update(tab.id, { url: url.href })
})
