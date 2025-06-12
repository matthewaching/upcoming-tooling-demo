import CatFact from "@/components/CatFact";
import Head from "next/head";
import Link from "next/link";
import { Suspense } from "react";

export default function CatFacts() {
    return (
        <>
            <Head>
                <title>cat facts</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Link href="/pics">go to cat pics</Link>
            <div className='contentContainer'>
                <h1>cat fact of the day</h1>
                <Suspense fallback={<div className='loadingSpinner' />}>
                    <CatFact />
                </Suspense>
            </div>
        </>
    );
}
