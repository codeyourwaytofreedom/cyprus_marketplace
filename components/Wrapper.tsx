import { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import Bottom_banner from './Bottom_banner';
import TopBanner from './TopBanner';

type wrapper_props = {
    pageTitle: string;
    children: ReactNode;
  };


const Wrapper:NextPage<wrapper_props> = ({pageTitle, children}) => {
    return ( <>
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content="Marketplace - Cyprus" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/shopping.png" />
        </Head>
        <main>
            <TopBanner/>
            {children}
        </main>
        <footer>
            <Bottom_banner/>
        </footer>
    </> );
}
 
export default Wrapper;