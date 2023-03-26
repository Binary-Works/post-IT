import Homepage from "@/components/_page_/homepage/homepage";
import Hots from "@/components/_page_/homepage/hots/hots";
import { Navbar } from "@/components/shared/navbar/navbar";
import { Test } from "@/components/test";
import GlobalLayout from "@/layout/globalLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Post IT | Home</title>
      </Head>
      <GlobalLayout>
        <Homepage />
      </GlobalLayout>
      {/* <Navbar /> */}
    </>
  );
}
