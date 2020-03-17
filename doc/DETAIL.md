# 关于项目

## 项目详情

1. 项目的默认包管理

    本项目默认使用`yarn`进行包管理

2. 项目依赖包详解

    * 项目中使用的开发依赖`react-app-rewired` `customize-cra` `babel-plugin-import` `less` `less-loader` `antd-dayjs-webpack-plugin` 全部基于 `antd`的[高级配置](https://ant.design/docs/react/use-with-create-react-app-cn)，没有使用`eject`对外暴露`webpack`来修改配置，使用了`react-app-rewired`的解决方案。`react-app-rewired`依赖`customize-cra`，对于自定义的webpack设置可以参考 [api](https://github.com/arackaf/customize-cra/blob/master/api.md) 获取使用所有`customize-cra`提供的API。配置文件为根目录的`config-overrides.js`

    * 项目的`dev`指令详解：`package.json`中对应指令为`nodemon --watch main.js --exec concurrently \"wait-on http://localhost:3000 && electron .\" \"cross-env BROWSER=none yarn start\"`，其中利用`nodemon`依赖监听`main.js`文件修改重载指令；`concurrently`并行`wait-on http://localhost:3000 && electron .`和`cross-env BROWSER=none yarn start`指令；`wait-on`依赖用于监听本地react服务的启动情况，当本地加载完成时执行`electron .`；`cross-env`利用了交叉环境设置环境变量`BROWSER=none`从而避免react自动启动浏览器预览

    * 项目自带了`antd`和`bizCharts`，提供了样式库和图形可视化的能力，`bizCharts`是阿里基于antv g2的React商业化封装，具体文档可参考`README`文档引用

3. 关于本项目打包的详解

    本项目使用`electron-builder`进行打包，第一次打包出现问题是必然的，下面的参考文章详细的记录了我配置打包文件的过程！

    * 你一定会遇到的错误（网络问题），参考这篇文章（Win10开发环境）[国内electron-vue build报错解决方法](https://juejin.im/post/5d102497e51d4556be5b3a74)，其实就是github下载慢的问题

        > 一定要自己去找最新版的`electron` `winCodeSign` `nsis` `nsis-resources`

    * 如何使用？我这个项目你直接跑就可以了`yarn build:win64`
    * 配置文件参考官方文档[electron-builder](https://www.electron.build/configuration/configuration)

> 详细的打包流程及优化建议请参考 [BUILD.md](./BUILD.md)
