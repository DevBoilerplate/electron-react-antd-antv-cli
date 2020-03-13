const { app, BrowserWindow } = require("electron")
const path = require('path')
const isDev = require("electron-is-dev")

const devUrl = "http://localhost:3000"

const localUrl = `file://${path.resolve(
  __dirname,
  '../../app.asar/build'
)}/index.html`

const appUrl = isDev ? devUrl : localUrl

let mainWindow

function createWindow() {
    // require("devtron").install()
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.maximize()
    // 设置进度条
    mainWindow.setProgressBar(0.5)
    mainWindow.loadURL(appUrl)
}

app.on("ready", createWindow)
