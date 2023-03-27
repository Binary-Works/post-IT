import { Navbar } from '@/components/shared/navbar/navbar';
import Read_post from '@/components/_page_/readpost/readpost';
import GlobalLayout from '@/layout/globalLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const Readpost = () => {
  const router = useRouter()
  const { readpost } = router.query


  return (
    <>
      <Head>
        <title>Post-IT | post:{readpost}</title>
      </Head>
      <GlobalLayout>
        <Read_post/>
      </GlobalLayout>
    </>
  );
};

export default Readpost;