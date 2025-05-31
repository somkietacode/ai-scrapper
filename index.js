const { app, BrowserWindow, ipcMain } = require('electron')

// IPC handler for fetching external pages without CORS
ipcMain.handle('fetch-url', async (_event, url, headers) => {
  const response = await fetch(url, { headers })
  const text = await response.text()
  return { ok: response.ok, status: response.status, text }
})

const createWindow = () => {
  const win = new BrowserWindow({
    useContentSize: true,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false
    }
  })

  win.loadFile('index.html')

  win.webContents.on('did-finish-load', async () => {
    const { width, height } = await win.webContents.executeJavaScript(
      '({ width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight })'
    );
    win.setContentSize(width, height)
  })
}

app.whenReady().then(() => {
  createWindow()
})