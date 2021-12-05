import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";

const PROTOCOL_METRICS_QUERY = gql`
  query TreasuryQuery {
    protocolMetrics(first: 1, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      ohmCirculatingSupply
      sOhmCirculatingSupply
      totalSupply
      ohmPrice
      marketCap
      totalValueLocked
      treasuryRiskFreeValue
      treasuryMarketValue
      nextEpochRebase
      nextDistributedOhm
      treasuryDaiRiskFreeValue
      treasuryFraxMarketValue
      treasuryDaiMarketValue
      treasuryFraxRiskFreeValue
      treasuryXsushiMarketValue
      treasuryWETHMarketValue
      treasuryLusdRiskFreeValue
      treasuryLusdMarketValue
      currentAPY
      runway10k
      runway20k
      runway50k
      runway7dot5k
      runway5k
      runway2dot5k
      runwayCurrent
      holders
      treasuryOhmDaiPOL
      treasuryOhmFraxPOL
    }
  }
`;

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.thegraph.com/subgraphs/name/drondin/olympus-graph",
});

/**
 * Hook for using the protocol metrics provided by the Olympus GraphQL API
 * @returns Protocol metrics
 */
export const useProtocolMetricsQuery = () => useQuery(PROTOCOL_METRICS_QUERY);
