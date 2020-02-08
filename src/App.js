import React, { useEffect, useState } from "react"
import logo from "./logo.svg"
import { Button } from "antd"
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts"
// 引入示例组件
import ComponentName from "./components/ComponentName"
import "./App.css"
// 添加键盘监听
let mouseTrap = require("mousetrap")

function App() {
  // intial为首次启动渲染状态，避免effect重复执行不必要的代码浪费资源
  const [intial, setIntial] = useState(true)
  useEffect(() => {
    if (intial) {
      setIntial(false)
      // 检查当前网络状态
      let onlineNotification = new Notification("项目示例通知栏", {
        body: `您的当前网络状态: ${navigator.onLine ? "在线" : "离线"}`
      })
      onlineNotification.onclick = () => {
        console.log("通知被点击")
      }
    }
    // 键盘监听示例
    mouseTrap.bind("ctrl+h", () => {
      console.log("你按下了ctrl+h键，Hello World!")
      // 阻止事件冒泡
      return false
    })
    mouseTrap.bind("f1", () => {
      console.log("你按下了F1！")
      return false
    })
    mouseTrap.bind("f2", () => {
      // 这里是直接调用electron的api示例项目支持react直接调用electron的api
      const { BrowserWindow } = window.electron.remote
      const notice = new Notification("按下F2启动子窗口", {
        body: "已运行打开bilibili"
      })
      notice.onclick = () => {
        console.log("您点击了通知")
      }
      let win = new BrowserWindow({
        width: 800,
        height: 600
      })
      win.loadURL("https://www.bilibili.com")
      win.on("closed", () => {
        console.log("您关闭了子窗口")
      })
      return false
    })
  }, [intial])
  // 数据源
  const data = [
    {
      genre: "Sports",
      sold: 275,
      income: 2300
    },
    {
      genre: "Strategy",
      sold: 115,
      income: 667
    },
    {
      genre: "Action",
      sold: 120,
      income: 982
    },
    {
      genre: "Shooter",
      sold: 350,
      income: 5271
    },
    {
      genre: "Other",
      sold: 150,
      income: 3710
    }
  ]

  // 定义度量
  const cols = {
    sold: {
      alias: "销售量"
    },
    genre: {
      alias: "游戏种类"
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.
        </p>
        {/* 下面组件调用会在控制台报错: Warning: Failed prop type: The prop `name` is marked as required in `ComponentName`, but its value is `undefined`. */}
        {/* <ComponentName num={10} /> */}
        {/* 正确用法需要name属性，并且为string类型，num参数可选默认值为零 */}
        <ComponentName name="Hello World" />
        <div>按下F2启动子窗口</div>
        <Chart width={600} height={400} data={data} scale={cols} style={{ marginTop: "50px" }} >
          <Axis name="genre" title />
          <Axis name="sold" title />
          <Legend position="top" dy={-20} /> <Tooltip />
          <Geom type="interval" position="genre*sold" color="genre" />
        </Chart>
        <Button type="primary"> antd env test Button </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
