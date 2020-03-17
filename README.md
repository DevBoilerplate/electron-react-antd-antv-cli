# electron-react-antd-antv-cli

一个集成electron、react、antd、antv的开发脚手架，便于快速搭建基于react开发的electron桌面应用

> EdeverClient可视化客户端便于更好的获取脚手架更新动态, 基于`electron-react-antd-antv-cli`构建! GitHub: [HerbertHe/EdeverClient](https://github.com/HerbertHe/EdeverClient/releases), Gitee: [HerbertHe/EdeverClient](https://gitee.com/HerbertHe/EdeverClient/releases)

## 环境依赖

* nodejs [未安装可参考](https://herberthe.gitee.io/2020/01/26/Nodejs%E5%AE%89%E8%A3%85%E8%8B%A5%E5%B9%B2%E9%97%AE%E9%A2%98%E9%81%BF%E5%9D%91/)
* yarn(项目依托`yarn`进行包管理)

> 关于electron的镜像，electron7.x之后需要设置单独的镜像，不然会安装报错；根据官方文档，中国地区镜像为: `https://cdn.npm.taobao.org/dist/electron/`

在Windows的环境下命令为:

```shell
npm config set ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/"

# 验证设置
npm config ls

# 成功配置输出
ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/"
```

## 快速使用

> 已提供命令行开发工具`Edever`做更便捷的下载管理，请参考文档使用Gitee: [HerbertHe/Edever](https://gitee.com/HerbertHe/Edever), GitHub: [HerbertHe/Edever](https://github.com/HerbertHe/Edever)

* `clone` 仓库

```shell
# github
git clone https://github.com/HerbertHe/electron-react-antd-antv-cli.git

# gitee
git clone https://gitee.com/HerbertHe/electron-react-antd-antv-cli.git
```

* 进入仓库

* 下载依赖

```shell
yarn
```

* 验证安装

```shell
yarn run ele:dev
```

* 已提供的指令

    ```shell
        "react:dev": "启动react的预览",
        "react:build": "构建react的产物",
        "react:test":  "react测试",
        "react:eject": "react-scripts eject",
        "ele:dev": "启动electron开发预览"
        "build:win64": "打包生成64位windows应用"
        # 下面详述包及自定义配置，目前只针对electron的开发做了脚本
    ```

    ```shell
        # 项目启动后在任何时间都可以在命令行输入rs回车使用nodemon强制项目更新
        rs
        # Ctrl + c后输入y即可退出命令行启动预览环境
    ```

## 文档

* [更新日志](./doc/UPDATE.md)
* [项目详细解读](./doc/DETAIL.md)
* [配置文件详情](./doc/CONFIG.md)
* [构建与优化](./doc/BUILD.md)
* [自动更新配置](./doc/AUTOUPDATE.md)

## 参考文档

* [在`create-react-app`中使用](https://ant.design/docs/react/use-with-create-react-app-cn)
* [react-app-rewired](https://github.com/timarney/react-app-rewired#alternatives)
* [customize-cra](https://github.com/arackaf/customize-cra)
* [bizCharts](https://bizcharts.net/index)
* [Ant Design of React](https://ant.design/docs/react/introduce-cn)
* [electron](https://www.electronjs.org/docs)
* [electron-builder](https://www.electron.build/configuration/configuration)
