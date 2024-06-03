"use client";
import useTheme from "@/hooks/useTheme";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    visit: 3490,
    click: 4300,
  },
  {
    name: "Tuesday",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Wednesday",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Thursday",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Friday",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Saturday",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Sunday",
    visit: 2390,
    click: 3800,
  },
];
export const Chart = () => {
  const theme = useTheme();
  console.log("theme: ", theme);
  return (
    <div className="h-[450px] dark:bg-bgSoft bg-bgSoftLight p-5 rounded-[10px]">
      <h2 className="mb-4 font-extralight dark:text-textSoft text-bgSoftLight text-[20px]">
        Weekly activities
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: theme === "dark" ? "#151c2c" : "#f0f5ff",
              borderRadius: "10px",
              borderColor: "#7e7e7e",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
