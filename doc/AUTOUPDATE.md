# 关于自动更新

首先根据[BUILD.md](./BUILD.md)文件配置好打包文件

## `electron-updater`包使用解读

* 本项目使用了`IPC通信`，代码位于主进程`/public/electron.js`（默认已注释）

```js

// feedUrl为更新的目标地址
const feedUrl = "xxx"

// 监听更新消息
ipcMain.on("update", () => {
    checkForUpdates()
})

let checkForUpdates = () => {
    autoUpdater.setFeedURL(feedUrl)

    // 整个生命周期
    // 报错
    autoUpdater.on("error", message => {
        sendUpdateMessage("error", message)
    })

    // 检查更新事件
    autoUpdater.on("checking-for-update", message => {
        sendUpdateMessage("checking-for-update", message)
    })
    // 可以更新事件
    autoUpdater.on("update-available", message => {
        sendUpdateMessage("update-available", message)
    })
    // 不可更新事件
    autoUpdater.on("update-not-available", message => {
        sendUpdateMessage("update-not-available", message)
    })
    // 更新下载进度事件
    autoUpdater.on("download-progress", progressObj => {
        sendUpdateMessage("downloadProgress", progressObj)
    })
    // 更新下载完成事件
    autoUpdater.on(
        "update-downloaded",
        (
            event,
            releaseNotes,
            releaseName,
            releaseDate,
            updateUrl,
            quitAndUpdate
        ) => {
            sendUpdateMessage("isUpdateNow")
            // 监听渲染进程确认更新事件
            ipcMain.on("updateNow", (e, arg) => {
                autoUpdater.quitAndInstall()
            })
        }
    )
    //执行自动更新检查
    autoUpdater.checkForUpdates()
}

// 主进程主动发送消息给渲染进程函数
function sendUpdateMessage(message, data) {
    console.log({ message, data })
    webContents.send("message", { message, data })
}
```

* 当渲染进程发送`update`消息给主进程时触发自动更新检查

## 参考使用`EdeverClient`工程完整代码可以参考

* 项目地址 GitHub: [HerbertHe/EdeverClient](https://github.com/HerbertHe/EdeverClient/releases), Gitee: [HerbertHe/EdeverClient](https://gitee.com/HerbertHe/EdeverClient/releases)

> EdeverClient可视化客户端便于更好的获取脚手架更新动态, 基于`electron-react-antd-antv-cli`构建! GitHub: [HerbertHe/EdeverClient](https://github.com/HerbertHe/EdeverClient/releases), Gitee: [HerbertHe/EdeverClient](https://gitee.com/HerbertHe/EdeverClient/releases)
