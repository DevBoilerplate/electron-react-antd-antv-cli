import React from "react";
import logo from "./logo.svg";
import { Button } from "antd";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
// 引入示例组件
import ComponentName from './components/ComponentName'
import "./App.css";

function App() {
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
  ];

  // 定义度量
  const cols = {
    sold: {
      alias: "销售量"
    },
    genre: {
      alias: "游戏种类"
    }
  };
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
        <ComponentName name='Hello World'/>
        <Chart width={600} height={400} data={data} scale={cols}>
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
  );
}

export default App;
