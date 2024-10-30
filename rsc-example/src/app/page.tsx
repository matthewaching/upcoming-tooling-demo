import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CatFacts() {
    const [dailyFact, setDailyFact] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchDailyFact = async () => {
            setIsLoading(true);
            const res = await fetch('https://ssr-sandbox.mching.dev/api/dailyfact');
            const body = await res.json();
            setDailyFact(body.dailyFact);
            setIsLoading(false);
        };

        fetchDailyFact();
    }, []);

    return (
        <>
            <Head>
                <title>cat facts</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Link href="/pics">go to cat pics</Link>
            <div className='contentContainer'>
                <h1>cat fact of the day</h1>
                {isLoading && <div className='loadingSpinner' />}
                {!isLoading && <span className='catFact'>{dailyFact}</span>}
            </div>
        </>
    );
}
