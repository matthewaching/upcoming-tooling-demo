'use client';

import React, { memo, useState } from 'react';
import Image from 'next/image';
import { fetchImage, swapLetter } from './actions';

const availableLetters = ['b', 'c', 'f', 'h', 'l', 'm', 'p', 'r', 's', 't', 'gy', 'x'];

const CatPicsContent = () => {
    const [selectedLetter, setSelectedLetter] = useState<string>('_');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [subtitle, setSubtitle] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleClick = async (event: React.MouseEvent) => {
        const letter = event.currentTarget.id ?? '';
        setIsLoading(true);
        setSelectedLetter(letter || '_');

        const imageRes = await fetchImage(letter);
        setImageUrl(imageRes);

        const subtitleRes = await swapLetter(letter);
        setSubtitle(subtitleRes);
        setIsLoading(false);
    };

    return (
        <>
            <div className='imageContainer'>
                {isLoading && <div className='loadingSpinner' />}
                {!isLoading && imageUrl && (
                    <Image className='catImage' src={imageUrl} alt='this is cat' height={500} width={400} />
                )}
            </div >
            <div className="headerContainer">
                {subtitle && <p className='imageSubtitle'>{subtitle}</p>}
                <h1>
                    {'this is a '}
                    <span className='letterSlot'>
                        {selectedLetter}
                    </span>
                    {'at cat.'}
                </h1>
            </div>
            <div className='buttons'>
                {availableLetters.map(letter => (
                    <button
                        id={letter}
                        key={letter}
                        className='letterButton'
                        onClick={handleClick}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </>
    );
};

export default memo(CatPicsContent);