import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { TimeResult } from "../models/TimeResult";

export const ChartFlow: React.FC<{ timeResults: TimeResult[] }> = ({
  timeResults,
}) => {
  return (
    <LineChart
      width={500}
      height={500}
      data={timeResults}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="threadAmount" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="time"
        stroke="#2e6bc7"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
