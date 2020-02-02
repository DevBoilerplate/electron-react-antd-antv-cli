const {
    app,
    BrowserWindow
} = require('electron')
const isDev = require('electron-is-dev')

let mainWindow

function createWindow() {
    require('devtron').install()
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    // 检查开发环境
    if (isDev) {
        mainWindow.loadURL('http://localhost:3000')
        mainWindow.webContents.openDevTools()
    }
}

app.on('ready', createWindow)