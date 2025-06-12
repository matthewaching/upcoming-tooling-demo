'use client';

import React, { memo, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { getAllUrls, swapLetter } from './actions';
import EmojiMenu from './EmojiMenu/EmojiMenu';

const availableLetters = ['b', 'c', 'f', 'h', 'l', 'm', 'p', 'r', 's', 't', 'gy'];

const CatPicsContent2 = () => {
    const [selectedLetter, setSelectedLetter] = useState<string>('_');
    const [selectedEmoji, setSelectedEmoji] = useState<string>('\u{1F63A}');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [subtitle, setSubtitle] = useState<string>('');
    const [allUrls, setAllUrls] = useState<Record<string, string>>({});

    useEffect(() => {
        (async () => {
            const allUrls = await getAllUrls();
            if (allUrls) {
                setAllUrls(allUrls);
            }
        })();
    }, []);

    const handleClick = async (event: React.MouseEvent) => {
        const letter = event.currentTarget.id ?? '';
        setSelectedLetter(letter || '_');
        setImageUrl(allUrls[letter] || '');

        const subtitleRes = await swapLetter(letter);
        setSubtitle(subtitleRes);
    };

    const handleEmojiSelected = useCallback((emoji: string) => {
        setSelectedEmoji(emoji);
        setSelectedLetter(emoji);
        setImageUrl('');
        setSubtitle('');
    }, []);

    return (
        <>
            <div className='imageContainer'>
                {imageUrl ?
                    <Image className='catImage' src={imageUrl} alt='this is cat' height={500} width={400} /> :
                    <div className='placeholderEmoji'>
                        {selectedEmoji ? selectedEmoji : 'Click a button to load a cat image!'}
                    </div>
                }
            </div >
            <div className="headerContainer">
                <h1>
                    {'this is a '}
                    <span className='letterSlot'>
                        {selectedLetter}
                    </span>
                    {'at cat.'}
                </h1>
                {subtitle && <p className='imageSubtitle'>{subtitle}</p>}
            </div>
            <div className='buttons'>
                {availableLetters.map(letter => (
                    <button
                        id={letter}
                        key={letter}
                        className='letterButton'
                        onClick={handleClick}
                    >
                        {letter !== selectedLetter && <Image src={allUrls[letter]} alt={`Cat image for ${letter}`} width={30} height={30} />}
                    </button>
                ))}
            </div>
            <EmojiMenu onEmojiSelected={handleEmojiSelected} />
        </>
    );
};

export default memo(CatPicsContent2);