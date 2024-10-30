import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [selectedLetter, setSelectedLetter] = useState<string>('_');

    const onClick = (event: React.MouseEvent) => {
        setSelectedLetter(event.currentTarget.textContent ?? '');
    };

    return (
        <>
            <Head>
                <title>cat pics</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div id="app">
                <Link href="/">go to cat facts</Link>
                <div>
                    <img className="catDisplay" src="" />
                    <h1>
                        {'this is a '}
                        <span className="letterSlot">
                            {selectedLetter}
                        </span>
                        {'at cat.'}
                    </h1>
                    <div className="buttons">
                        <button className="letterButton" onClick={onClick}>b</button>
                        <button className="letterButton" onClick={onClick}>c</button>
                        <button className="letterButton" onClick={onClick}>f</button>
                        <button className="letterButton" onClick={onClick}>h</button>
                        <button className="letterButton" onClick={onClick}>l</button>
                        <button className="letterButton" onClick={onClick}>m</button>
                        <button className="letterButton" onClick={onClick}>p</button>
                        <button className="letterButton" onClick={onClick}>r</button>
                        <button className="letterButton" onClick={onClick}>s</button>
                        <button className="letterButton" onClick={onClick}>t</button>
                        <button className="letterButton" onClick={onClick}>gy</button>
                    </div>
                </div>
            </div>
        </>
    );
}
