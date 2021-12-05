import React from "react";
import { useProtocolMetricsQuery } from "../hooks/useGraph";
import { useStakingContract } from "../hooks/useStakingContract";

const TreasuryDashboard = () => {
  const { data } = useProtocolMetricsQuery();
  const { index } = useStakingContract();

  const [metrics, ..._] = data?.protocolMetrics ?? [];

  const backingPerOHM = metrics?.ohmCirculatingSupply
    ? Number(metrics?.treasuryMarketValue) /
      Number(metrics.ohmCirculatingSupply)
    : null;

  const wsOhmPrice = index ? metrics.ohmPrice * index : null;

  return (
    <section className="section">
      <div className="container">
        <div className="has-text-light columns is-multiline has-text-centered">
          <div className="column is-4-desktop is-6-tablet">
            <p className="has-text-grey-light">Market Cap</p>
            <p className="has-text-weight-bold">
              {metrics?.marketCap &&
                Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                }).format(metrics.marketCap)}
            </p>
          </div>
          <div className="column is-4-desktop is-6-tablet">
            <p className="has-text-grey-light">OHM Price</p>
            <p className="has-text-weight-bold">
              {metrics?.ohmPrice &&
                Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(metrics.ohmPrice)}
            </p>
          </div>
          <div className="column is-4-desktop is-6-tablet">
            <p className="has-text-grey-light">wsOHM Price</p>
            <p className="has-text-weight-bold">
              {wsOhmPrice &&
                Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(wsOhmPrice)}
            </p>
          </div>
          <div className="column is-4-desktop is-6-tablet">
            <p className="has-text-grey-light">Circulating Supply (total)</p>
            <p className="has-text-weight-bold">
              {metrics?.ohmCirculatingSupply
                ? `${Number(metrics?.ohmCirculatingSupply)?.toFixed(
                    0
                  )} / ${Number(metrics?.totalSupply)?.toFixed(0)}`
                : null}
            </p>
          </div>
          <div className="column is-4-desktop is-6-tablet">
            <p className="has-text-grey-light">Backing per OHM</p>
            <p className="has-text-weight-bold">
              {backingPerOHM &&
                Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(backingPerOHM)}
            </p>
          </div>
          <div className="column is-4-desktop is-6-tablet">
            <p className="has-text-grey-light">Current Index</p>
            <p className="has-text-weight-bold">
              {index && `${index?.toFixed(2)} sOHM`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreasuryDashboard;
