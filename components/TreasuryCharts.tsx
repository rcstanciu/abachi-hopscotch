import React from "react";
import { useProtocolMetricsQuery } from "../hooks/useGraph";
import TreasuryRiskFreeValueChart from "./charts/TreasuryRiskFreeValueChart";
import TreasuryTotalValueLockedChart from "./charts/TreasuryTotalValueLockedChart";

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

  return (
    <section className="section">
      <div className="container">
        <div className="has-text-light columns is-multiline has-text-centered">
          <div className="column is-6">
            <TreasuryTotalValueLockedChart values={totalValueLockedValues} />
          </div>
          <div className="column is-6">
            <TreasuryRiskFreeValueChart values={treasuryRiskFreeValues} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreasuryCharts;
