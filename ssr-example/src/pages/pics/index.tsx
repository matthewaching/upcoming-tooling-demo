import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const availableLetters = ['b', 'c', 'f', 'h', 'l', 'm', 'p', 'r', 's', 't', 'gy'];

export default function CatPics() {
    const [selectedLetter, setSelectedLetter] = useState<string>('_');
    const [imageUrl, setImageUrl] = useState<string>('');

    const swapLetter = async (event: React.MouseEvent) => {
        const letter = event.currentTarget.id ?? '_';
        setSelectedLetter(letter);

        if (letter !== '_') {
            const res = await fetch("https://ssr-sandbox.mching.dev/api/catpicture", {
                method: "POST",
                body: JSON.stringify({ letterInput: letter }),
            });

            const body = await res.json();
            const imageUrl = body.catUrl ?? '';
            setImageUrl(imageUrl);
        }
    };

    return (
        <>
            <Head>
                <title>cat pics</title>
            </Head>
            <Link href="/">go to cat facts</Link>
            <div>
                <Image className="catDisplay" src={imageUrl} alt='this is cat' />
                <h1>
                    {'this is a '}
                    <span className="letterSlot">
                        {selectedLetter}
                    </span>
                    {'at cat.'}
                </h1>
                <div className="buttons">
                    {availableLetters.map(letter => (
                        <button
                            id={letter}
                            key={letter}
                            className='letterButton'
                            onClick={swapLetter}
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
