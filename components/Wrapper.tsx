import { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';

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
            {children}
        </main>
    
    </> );
}
 
export default Wrapper;