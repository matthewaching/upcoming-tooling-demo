'use client';

import React, { memo, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { getAllUrls } from './actions';
import EmojiMenu from './EmojiMenu/EmojiMenu';
// import { unstable_ViewTransition as ViewTransition } from 'react';

const availableLetters = ['b', 'c', 'f', 'h', 'l', 'm', 'p', 'r', 's', 't', 'gy'];

const swapLetter = (letter: string) => {
    if (letter === 'f') {
        return 'that\'s not very nice';
    } else if (letter === 'fl') {
        return 'don\'t tread on me';
    } else if (letter === 'l') {
        return 'the gainz';
    } else if (letter === 'gy') {
        return 'sheeeeesh';
    } else if (letter === 'x') {
        return 'that doesn\'t look right...';
    } else {
        return '';
    }
};

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

    const handleClick = (event: React.MouseEvent) => {
        const letter = event.currentTarget.id ?? '';
        setSelectedLetter(letter || '_');
        setImageUrl(allUrls[letter] || '');

        const subtitleRes = swapLetter(letter);
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
                {imageUrl ? (
                    <Image className='catImage' src={imageUrl} alt='this is cat' height={350} width={300} />
                ) : (
                    <div className='placeholderEmoji'>
                        {selectedEmoji ? selectedEmoji : 'Click a button to load a cat image!'}
                    </div>
                )}
            </div>
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
                        {letter !== selectedLetter && (
                            <Image src={allUrls[letter]} alt={`Cat image for ${letter}`} width={30} height={30} />
                        )}
                    </button>
                ))}
            </div>
            <EmojiMenu onEmojiSelected={handleEmojiSelected} />
        </>
    );
};

export default memo(CatPicsContent2);