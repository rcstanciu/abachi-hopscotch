import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import format from "date-fns/format";
import Chart, { CHART_HEIGHT, currencyFormatter } from "./Chart";

interface Props {
  values: Array<{ dai: number; frax: number; lusd: number; timestamp: number }>;
}

const RunwayChart = ({ values }: Props): JSX.Element => {
  return (
    <Chart label="Runway Available">
      <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
        <LineChart height={400} data={values}>
          <Line
            type="monotone"
            dataKey="runwayCurrent"
            stroke="#ffffff"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="runway7dot5k"
            stroke="#2f9679"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="runway5k"
            stroke="#4747b8"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="runway2dot5k"
            stroke="#7f2422"
            dot={false}
          />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(value) => format(new Date(value * 1000), "MMM dd")}
            interval={30}
            reversed
          />
          <Tooltip formatter={(value) => `${value.toFixed(0)} days`} />
        </LineChart>
      </ResponsiveContainer>
    </Chart>
  );
};

export default RunwayChart;
