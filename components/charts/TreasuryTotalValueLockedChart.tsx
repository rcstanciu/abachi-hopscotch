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

const TreasuryTotalValueLockedChart = ({ values }: Props): JSX.Element => {
  return (
    <Chart label="Total Value Locked">
      <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
        <AreaChart height={400} data={values}>
          <Area
            type="monotone"
            dataKey="value"
            stroke="gray"
            dot={false}
            color="#fff"
            fill="gray"
            fillOpacity={1}
          />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(value) => format(new Date(value * 1000), "MMM dd")}
            interval={30}
            reversed
          />
          <Tooltip formatter={(value) => currencyFormatter.format(value)} />
        </AreaChart>
      </ResponsiveContainer>
    </Chart>
  );
};

export default TreasuryTotalValueLockedChart;
