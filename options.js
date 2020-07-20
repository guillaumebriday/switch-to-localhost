document.addEventListener('DOMContentLoaded', async function () {
  const { protocol, host, port } = await browser.storage.local.get(['protocol', 'host', 'port'])

  document.querySelector("#protocol").value = protocol
  document.querySelector("#host").value = host
  document.querySelector("#port").value = port
})

document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault()

  await browser.storage.local.set({
    protocol: document.querySelector("#protocol").value,
    host: document.querySelector("#host").value,
    port: document.querySelector("#port").value,
  })

  document.querySelector('.alert').classList.remove('d-none')
})
