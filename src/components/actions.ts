'use server';
export const fetchImage = async (letter: string) => {
    const res = await fetch('https://ssr-sandbox.mching.dev/api/catpicture', {
        method: 'POST',
        body: JSON.stringify({ letterInput: letter }),
    });

    const body = await res.json();

    return body.catUrl ?? '';
};

export const swapLetter = async (letter: string) => {
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