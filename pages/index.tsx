import type { NextPage } from "next";
import Head from "next/head";
import TreasuryDashboard from "../components/TreasuryDashboard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>OHM Dashboard</title>
        <meta name="description" content="OHM Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TreasuryDashboard />
    </div>
  );
};

export default Home;
