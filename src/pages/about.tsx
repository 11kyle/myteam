import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Clients from "~/components/clients";
import Hero from "~/components/hero";
import Layout from "~/components/layouts/layout";
import Team from "~/components/team";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Team />
      <Clients />
      <Layout />
    </>
  );
};

export default Home;
