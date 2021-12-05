import React, { useState, useEffect } from "react";

import OlympusStakingV2 from "../abi/OlympusStakingv2.json";
import { ethers } from "ethers";

const STAKING_CONTRACT_ADDRESS = "0xFd31c7d00Ca47653c6Ce64Af53c1571f9C36566a";

/**
 * Hook for retrieving data from the Staking V2 contract
 * @returns index Current Index
 */
export const useStakingContract = () => {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    (async () => {
      const stakingContract = new ethers.Contract(
        STAKING_CONTRACT_ADDRESS,
        OlympusStakingV2.abi,
        new ethers.providers.WebSocketProvider(
          process.env.NEXT_PUBLIC_WEBSOCKET_PROVIDER_URL
        )
      );

      const currentIndex = await stakingContract.index();
      const indexAsNumber = Number(
        ethers.utils.formatUnits(currentIndex, "gwei")
      );

      setIndex(indexAsNumber);
    })();
  }, []);

  return { index };
};
