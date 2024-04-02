const { app, BrowserWindow } = require('electron')

app.disableHardwareAcceleration();

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  win.loadFile('index.html')
  win.maximize()
}

app.whenReady().then(createWindow)