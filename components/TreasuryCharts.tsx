import React from "react";
import { useProtocolMetricsQuery } from "../hooks/useGraph";
import TreasuryMarketValueChart from "./charts/TreasuryMarketValueChart";
import POLChart from "./charts/POLChart";
import TreasuryRiskFreeValueChart from "./charts/TreasuryRiskFreeValueChart";
import TreasuryTotalValueLockedChart from "./charts/TreasuryTotalValueLockedChart";
import OHMStakedChart from "./charts/OHMStakedChart";
import RunwayChart from "./charts/RunwayChart";

const TreasuryCharts = (): JSX.Element => {
  const { data } = useProtocolMetricsQuery();
  const metrics = data?.protocolMetrics ?? [];

  const treasuryRiskFreeValues = metrics.map((item) => ({
    dai: parseFloat(item.treasuryDaiRiskFreeValue),
    frax: parseFloat(item.treasuryFraxRiskFreeValue),
    lusd: parseFloat(item.treasuryLusdRiskFreeValue),
    timestamp: parseFloat(item.timestamp),
  }));
  const totalValueLockedValues = metrics.map((item) => ({
    value: parseFloat(item.totalValueLocked),
    timestamp: parseFloat(item.timestamp),
  }));
  const treasuryMarketValues = metrics.map((item) => ({
    dai: parseFloat(item.treasuryDaiMarketValue),
    frax: parseFloat(item.treasuryFraxMarketValue),
    lusd: parseFloat(item.treasuryLusdMarketValue),
    eth: parseFloat(item.treasuryWETHMarketValue),
    sushi: parseFloat(item.treasuryXsushiMarketValue),
    timestamp: parseFloat(item.timestamp),
  }));
  const polValues = metrics.map((item) => ({
    value: parseFloat(item.treasuryOhmDaiPOL),
    timestamp: parseFloat(item.timestamp),
  }));
  const ohmStakedValues = metrics.map((item) => ({
    value:
      (parseFloat(item.sOhmCirculatingSupply) /
        parseFloat(item.ohmCirculatingSupply)) *
      100,
    timestamp: parseFloat(item.timestamp),
  }));
  const runwayValues = metrics.map((item) => ({
    runwayCurrent: parseFloat(item.runwayCurrent),
    runway7dot5k: parseFloat(item.runway7dot5k),
    runway5k: parseFloat(item.runway5k),
    runway2dot5k: parseFloat(item.runway2dot5k),
    timestamp: parseFloat(item.timestamp),
  }));

  if (!metrics.length) {
    return null;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="has-text-light columns is-multiline has-text-centered">
          <div className="column is-6">
            <TreasuryTotalValueLockedChart values={totalValueLockedValues} />
          </div>
          <div className="column is-6">
            <TreasuryMarketValueChart values={treasuryMarketValues} />
          </div>
          <div className="column is-6">
            <TreasuryRiskFreeValueChart values={treasuryRiskFreeValues} />
          </div>
          <div className="column is-6">
            <POLChart values={polValues} />
          </div>
          <div className="column is-6">
            <OHMStakedChart values={ohmStakedValues} />
          </div>
          <div className="column is-6">
            <RunwayChart values={runwayValues} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreasuryCharts;
