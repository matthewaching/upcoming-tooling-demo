import { useEffect, useState } from 'react';

const availableLetters = ['b', 'c', 'f', 'h', 'l', 'm', 'p', 'r', 's', 't', 'gy'];

const CatPics = () => {
    const [selectedLetter, setSelectedLetter] = useState<string>('_');
    const [imageUrl, setImageUrl] = useState<string>('');

    const swapLetter = async (event: React.MouseEvent) => {
        const letter = event.currentTarget.id;
        setSelectedLetter(letter ?? '_');

        if (letter) {
            const res = await fetch('https://ssr-sandbox.mching.dev/api/catpicture', {
                method: 'POST',
                body: JSON.stringify({ letterInput: letter }),
            });

            const body = await res.json();
            setImageUrl(body.catUrl ?? '');
        }
    };

    useEffect(() => {
        document.title = 'cat pics';
    }, []);

    return (
        <div className='contentContainer'>
            <div className='imageContainer'>
                <img className='catDisplay' src={imageUrl} alt='this is cat' />
            </div>
            <h1>
                {'this is a '}
                <span className='letterSlot'>
                    {selectedLetter}
                </span>
                {'at cat.'}
            </h1>
            <div className='buttons'>
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
    );
};

export default CatPics;