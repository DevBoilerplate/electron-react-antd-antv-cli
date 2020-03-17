# 打包与优化

* 你一定会遇到的错误（网络问题），参考这篇文章（Win10开发环境）[国内electron-vue build报错解决方法](https://juejin.im/post/5d102497e51d4556be5b3a74)，其实就是github下载慢的问题

    > 一定要自己去找最新版的`electron` `winCodeSign` `nsis` `nsis-resources`

## 打包流程

* 根据[CONFIG.md](./CONFIG.md)配置好打包`package.json`
* 运行`yarn autoclean --force`清除不必要的依赖文件
* 如果存在`dist(输出文件夹)`请删掉
* 本项目运行`yarn build:win64`即可打包64位Windows的应用程序 (本地只有Windows环境主要是😭)

## 优化建议

* 不要再使用`双package.json`的方案，`electron v8.x`之后将不再支持，并且打包会报错
* 如果`dist`(输出)文件夹存在，请在打包之前删掉文件夹
* 使用`yarn autoclean --force`命令清除依赖的不必要文件

## 打包及debug参考文章

* [Electron 打包优化 - 从 393MB 到 161MB](https://cloud.tencent.com/developer/article/1547891)
* [electron-builder打包的基础设置和常见问题](https://github.com/QDMarkMan/CodeBlog/blob/master/Electron/electron-builder%E6%89%93%E5%8C%85%E8%AF%A6%E8%A7%A3.md)
* [国内electron-vue build报错解决方法](https://juejin.im/post/5d102497e51d4556be5b3a74)
* [Error: Application entry file "build/electron.js" in the "\<path\>/dist/mac/\<app-name\>/Contents/Resources/app.asar" does not exist. #2404](https://github.com/electron-userland/electron-builder/issues/2404)
* [Electron 应用如何利用 create-react-app 从 0 到 1](https://juejin.im/post/5b86b7fd6fb9a019c476fc06)
