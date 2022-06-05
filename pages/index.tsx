import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/header";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Gabriela e Leonardo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
