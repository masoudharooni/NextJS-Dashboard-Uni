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
        name: "شنبه",
        بازدید: 3490,
        "کلیک کردن": 4300,
    },
    {
        name: "یکشنبه",
        بازدید: 4000,
        "کلیک کردن": 2400,
    },
    {
        name: "دوشنبه",
        بازدید: 3000,
        "کلیک کردن": 1398,
    },
    {
        name: "سه‌شنبه",
        بازدید: 2000,
        "کلیک کردن": 3800,
    },
    {
        name: "چهارشنبه",
        بازدید: 2780,
        "کلیک کردن": 3908,
    },
    {
        name: "پنجشنبه",
        بازدید: 1890,
        "کلیک کردن": 4800,
    },
    {
        name: "جمعه",
        بازدید: 2390,
        "کلیک کردن": 3800,
    },
];
export const Chart = () => {
    const theme = useTheme();
    console.log("theme: ", theme);
    return (
        <div className="h-[450px] dark:bg-bgSoft bg-bgSoftLight p-5 rounded-[10px]">
            <h2 className="mb-4 font-extralight dark:text-textSoft text-bgSoftLight text-[20px]">
                فعالیت هفتگی
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
                        }}
                    />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="بازدید"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="کلیک کردن" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
