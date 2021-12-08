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
  values: Array<{ dai: number; frax: number; lusd: number; timestamp: number }>;
}

const TreasuryMarketValueChart = ({ values }: Props): JSX.Element => {
  return (
    <Chart label="Market Value of Treasury Assets">
      <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
        <AreaChart height={400} data={values}>
          <Area
            type="monotone"
            dataKey="dai"
            stroke="#737250"
            dot={false}
            fill="#737250"
            fillOpacity={1}
            stackId="1"
          />
          <Area
            type="monotone"
            dataKey="frax"
            stroke="gray"
            dot={false}
            fill="gray"
            fillOpacity={1}
            stackId="1"
          />
          <Area
            type="monotone"
            dataKey="eth"
            stroke="#6c5174"
            dot={false}
            fill="#6c5174"
            fillOpacity={1}
            stackId="1"
          />
          <Area
            type="monotone"
            dataKey="sushi"
            stroke="#517457"
            dot={false}
            fill="#517457"
            fillOpacity={1}
            stackId="1"
          />
          <Area
            type="monotone"
            dataKey="lusd"
            stroke="#7f2422"
            dot={false}
            fill="#7f2422"
            fillOpacity={1}
            stackId="1"
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

export default TreasuryMarketValueChart;
