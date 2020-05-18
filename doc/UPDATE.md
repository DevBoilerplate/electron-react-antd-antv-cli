# 更新日志

* 2020/05/18更新: `electron`更新到`8.3.0`, `antd`更新到`4.2.3`, 根据`antd高级配置`将`webpack`第三方工具修改到`craco`, 移除`react-app-rewired`
* 2020/04/05更新: `electron`更新到`8.2.0`, 版本信息请查看[release](https://www.electronjs.org/releases/stable)
* 2020/03/17更新: 引入`electron-updater`配置自动更新，新增`dev-app-update.yml`对于开发环境获取自动更新配置，删除`package.json.bak`模板文件，请参考`package.json`修改
* 2020/03/16更新: 新增`.yarnclean`文件对依赖不必要的代码进行清理，缩小打包文件体积
* 2020/03/13更新: 引入`electron-builder`进行项目打包并且为打包配置了环境`windows only`，示例文件为`package.json`，模板文件为`package.json.bak`，并且修改了模板工程结构`main.js --> public/electron.js`(参考[#2404](https://github.com/electron-userland/electron-builder/issues/2404))，下面会详解打包原理和debug
* 2020/03/12更新: 更新`electron`到`8.1.1`, 更新`antd`到`v4`, 参考[antd从v3到v4](https://ant.design/docs/react/migration-v4-cn)
* 2020/02/08更新: 更新`package.json`中脚本以更好区分开发环境
* 2020/02/05新增: `mousetrap`进行对键盘事件的监听，示例参考`/src/App.js`
* 2020/02/04新增: `prop-types`进行对组件`props`的类型检查，示例参考`/src/components/ComponentsName.js`
