import CatFact from "@/components/CatFact";
import Head from "next/head";
import { Suspense } from "react";
// import { Suspense, unstable_ViewTransition as ViewTransition } from 'react';

export default function CatFacts() {
    return (
        <>
            <Head>
                <title>cat facts</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className='contentContainer'>
                <h1>cat fact of the day</h1>
                <Suspense fallback={<div className='loadingSpinner' />}>
                    <CatFact />
                </Suspense>
            </div>
        </>
    );
}
