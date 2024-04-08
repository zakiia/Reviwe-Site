import "./DashBoard.css";
import React, { useEffect, useState } from "react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashBoard = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);
  return (
    <div className="dashboard">
      <div className="area-chart">
        <AreaChart
          width={800}
          height={400}
          data={chart}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
      <div className="bar-chart">
        <BarChart width={800} height={400} data={chart}>
          <Bar dataKey="sell" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#8884d8" />
          <XAxis dataKey="month"></XAxis>
          <YAxis></YAxis>
        </BarChart>
      </div>
    </div>
  );
};

export default DashBoard;
