import React from "react";
import styles from "./Chart.module.scss";

interface Props {
  label?: string;
  children: React.ReactNode;
}

export const CHART_HEIGHT = 200;

export const currencyFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const Chart = ({ label, children }: Props): JSX.Element => {
  return (
    <div className={styles.chart}>
      {children}
      {label && <p className="has-text-grey-light mb-4 is-size-7">{label}</p>}
    </div>
  );
};

export default Chart;
