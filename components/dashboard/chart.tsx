"use client";
import useTheme from "@/hooks/useTheme";
import { dashboardChartSource } from "@/sources/dashboard";
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
          data={dashboardChartSource}
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
