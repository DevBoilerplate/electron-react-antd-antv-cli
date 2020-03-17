# 项目配置

## `package.json`的配置打包

> 请参考官方文档 [electron-builder](https://www.electron.build/configuration/configuration)

* `${productName}-Setup-${version}.${ext}`字段的`version`与`package.json`的`version`保持一致

* 参数解读:

```json
"build": {
    "productName": "工程名",
    "appId": "xxx.xxx.xxx包名",
    "copyright": "版权信息",
    "directories": {
      "output": "dist(输出文件夹)"
    },
    "dmg": {
      "contents": [
        {
          "x": 410,
          "y": 150,
          "type": "link",
          "path": "/Applications"
        },
        {
          "x": 130,
          "y": 150,
          "type": "file"
        }
      ]
    },
    "win": {
      "icon": "build/logo512.png",
      "artifactName": "${productName}-Setup-${version}.${ext}",
      "target": [
        {
          "target": "nsis",
          "arch": [
            "x64"
          ]
        }
      ]
    },
    "mac": {
      "icon": "build/logo512.icns",
      "artifactName": "${productName}-Setup-${version}.${ext}"
    },
    "linux": {
      "icon": "build/logo512",
      "artifactName": "${productName}-Setup-${version}.${ext}"
    },
    "files": [
      "dist/**/*"
    ],
    "nsis": {
      "oneClick": false,
      "allowElevation": true,
      "allowToChangeInstallationDirectory": true,
      "installerIcon": "build/favicon.ico",
      "uninstallerIcon": "build/favicon.ico",
      "installerHeaderIcon": "build/favicon.ico",
      "createDesktopShortcut": true,
      "createStartMenuShortcut": true,
      "shortcutName": "软件名称"
    },
    "publish": [
      {
        "provider": "发布渠道",
        "url": "地址"
      }
    ]
  },
```

## `dev-app-update`参数解读(开发时自动更新)

```yml
provider: 'generic'
url: '地址'
channel: 'latest'
```

* `provider`与`publish`的`provider`保持一致
* `url`与上述的`url`保持一致
