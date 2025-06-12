import React from 'react';

export default async function CatFact() {
    const res = await fetch('https://ssr-sandbox.mching.dev/api/dailyfact');
    const body = await res.json();
    const dailyFact = body.dailyFact;

    return (
        <span className='catFact'>{dailyFact}</span>
    );
}