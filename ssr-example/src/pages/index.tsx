import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [dailyFact, setDailyFact] = useState<string>('');

    useEffect(() => {
        const fetchDailyFact = async () => {
            const res = await fetch(
                "https://cat-fact.herokuapp.com/facts/5a4aab322c99ee00219e11c5"
            );
            const body = await res.json();
            setDailyFact(body.text);
        };

        fetchDailyFact();
    }, []);

    return (
        <>
            <Head>
                <title>cat facts</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div id='app'>
                <Link href="/pics">go to cat pics</Link>
                <div>
                    <h1>cat fact of the day</h1>
                    <div className="card">
                        {dailyFact}
                    </div>
                </div>
            </div>
        </>
    );
}
