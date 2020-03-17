const { app, BrowserWindow, ipcMain } = require("electron")
const path = require('path')
const isDev = require("electron-is-dev")
// 自动更新
// const { autoUpdater } = require("electron-updater")

const devUrl = "http://localhost:3000"

const localUrl = `file://${path.resolve(
  __dirname,
  '../../app.asar/build'
)}/index.html`

const appUrl = isDev ? devUrl : localUrl

let mainWindow

// let webContents

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
    // 打开调试工具
    // mainWindow.webContents.openDevTools()

    // 获取webContents用于下面的自动更新
    // webContents = mainWindow.webContents
    mainWindow.loadURL(appUrl)
}

app.on("ready", createWindow)

// // feedUrl为更新的目标地址
// const feedUrl = "xxx"

// // 监听更新消息
// ipcMain.on("update", () => {
//     checkForUpdates()
// })

// let checkForUpdates = () => {
//     autoUpdater.setFeedURL(feedUrl)

//     // 整个生命周期
//     autoUpdater.on("error", message => {
//         sendUpdateMessage("error", message)
//     })

//     autoUpdater.on("checking-for-update", message => {
//         sendUpdateMessage("checking-for-update", message)
//     })
//     autoUpdater.on("update-available", message => {
//         sendUpdateMessage("update-available", message)
//     })
//     autoUpdater.on("update-not-available", message => {
//         sendUpdateMessage("update-not-available", message)
//     })
//     // 更新下载进度事件
//     autoUpdater.on("download-progress", progressObj => {
//         sendUpdateMessage("downloadProgress", progressObj)
//     })
//     // 更新下载完成事件
//     autoUpdater.on(
//         "update-downloaded",
//         (
//             event,
//             releaseNotes,
//             releaseName,
//             releaseDate,
//             updateUrl,
//             quitAndUpdate
//         ) => {
//             sendUpdateMessage("isUpdateNow")
//             ipcMain.on("updateNow", (e, arg) => {
//                 autoUpdater.quitAndInstall()
//             })
//         }
//     )
//     //执行自动更新检查
//     autoUpdater.checkForUpdates()
// }

// // 主进程主动发送消息给渲染进程函数
// function sendUpdateMessage(message, data) {
//     console.log({ message, data })
//     webContents.send("message", { message, data })
// }
