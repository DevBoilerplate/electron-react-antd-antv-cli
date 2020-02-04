# electron-react-antd-antv-cli

一个集成electron、react、antd、antv的开发脚手架，便于快速搭建基于react开发的electron桌面应用

## 环境依赖

* nodejs [未安装可参考](https://herberthe.gitee.io/2020/01/26/Nodejs%E5%AE%89%E8%A3%85%E8%8B%A5%E5%B9%B2%E9%97%AE%E9%A2%98%E9%81%BF%E5%9D%91/)

> 关于electron的镜像，electron7.x之后需要设置单独的镜像，不然会安装报错；根据官方文档，中国地区镜像为: `https://cdn.npm.taobao.org/dist/electron/`

在Windows的环境下命令为:

```shell
npm config set ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/"

# 验证设置
npm config ls

# 成功配置输出
ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/"
```

## 新增更新

* 2020/2/4新增: `prop-types`进行对组件`props`的类型检查，示例参考`/src/components/ComponentsName.js`

## 快速使用

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
yarn install
```

* 验证安装

```shell
yarn run dev
```

## 关于项目

1. 已提供的指令

    ```shell
        "start": "启动react的预览",
        "build": "构建react的产物",
        "test":  "react测试",
        "eject": "react-scripts eject",
        "dev": "启动electron开发预览"
        # 下面详述包及自定义配置，目前只针对electron的开发做了脚本
    ```

2. 项目的默认包管理

    本项目默认使用`yarn`进行包管理

3. 项目依赖包详解

    * 项目中使用的开发依赖`react-app-rewired` `customize-cra` `babel-plugin-import` `less` `less-loader` `antd-dayjs-webpack-plugin` 全部基于 `antd`的[高级配置](https://ant.design/docs/react/use-with-create-react-app-cn)，没有使用`eject`对外暴露`webpack`来修改配置，使用了`react-app-rewired`的解决方案。`react-app-rewired`依赖`customize-cra`，对于自定义的webpack设置可以参考 [api](https://github.com/arackaf/customize-cra/blob/master/api.md) 获取使用所有`customize-cra`提供的API。配置文件为根目录的`config-overrides.js`

    * 项目的`dev`指令详解：`package.json`中对应指令为`nodemon --watch main.js --exec concurrently \"wait-on http://localhost:3000 && electron .\" \"cross-env BROWSER=none yarn start\"`，其中利用`nodemon`依赖监听`main.js`文件修改重载指令；`concurrently`并行`wait-on http://localhost:3000 && electron .`和`cross-env BROWSER=none yarn start`指令；`wait-on`依赖用于监听本地react服务的启动情况，当本地加载完成时执行`electron .`；`cross-env`利用了交叉环境设置环境变量`BROWSER=none`从而避免react自动启动浏览器预览

    * 项目自带了`antd`和`bizCharts`，提供了样式库和图形可视化的能力，`bizCharts`是阿里基于antv g2的React商业化封装，具体文档可参考下面的文档引用

## 参考文档

* [在`create-react-app`中使用](https://ant.design/docs/react/use-with-create-react-app-cn)
* [react-app-rewired](https://github.com/timarney/react-app-rewired#alternatives)
* [customize-cra](https://github.com/arackaf/customize-cra)
* [bizCharts](https://bizcharts.net/index)
* [Ant Design of React](https://ant.design/docs/react/introduce-cn)
* [electron](https://www.electronjs.org/docs)
