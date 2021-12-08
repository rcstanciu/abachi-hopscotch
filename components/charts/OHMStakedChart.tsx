import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import format from "date-fns/format";
import Chart, { CHART_HEIGHT, currencyFormatter } from "./Chart";

interface Props {
  values: Array<{ value: number; timestamp: number }>;
}

const OHMStakedChart = ({ values }: Props): JSX.Element => {
  return (
    <Chart label="OHM Staked">
      <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
        <AreaChart height={400} data={values}>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#4747b8"
            dot={false}
            fill="#4747b8"
            fillOpacity={1}
          />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(value) => format(new Date(value * 1000), "MMM dd")}
            interval={30}
            reversed
          />
          <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
        </AreaChart>
      </ResponsiveContainer>
    </Chart>
  );
};

export default OHMStakedChart;
