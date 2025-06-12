'use client';

import CatPicsContent from '@/components/CatPicsContent';
import CatPicsContent2 from '@/components/CatPicsContent2';
import Head from 'next/head';
import { createContext, useState } from 'react';

export const ThemeContext = createContext<'theme-blue' | 'theme-purple'>('theme-blue');

const CatPics = () => {
    const [selectedVersion, setSelectedVersion] = useState<1 | 2>(1);
    const [selectedTheme, setSelectedTheme] = useState<'theme-blue' | 'theme-purple'>('theme-blue');

    return (
        <>
            <Head>
                <title>cat pics</title>
            </Head>
            <ThemeContext value={selectedTheme}>
                <div className='versionSelector'>
                    <button
                        className={selectedVersion === 1 ? selectedTheme : ''}
                        onClick={() => setSelectedVersion(1)}
                    >
                        v1
                    </button>
                    <button
                        className={selectedVersion === 2 ? selectedTheme : ''}
                        onClick={() => setSelectedVersion(2)}
                    >
                        v2
                    </button>
                    <div className={`themeSelector ${selectedTheme}`} onClick={() => setSelectedTheme(selectedTheme === 'theme-blue' ? 'theme-purple' : 'theme-blue')} />
                </div>
                <div className={`contentContainer ${selectedVersion !== 1 ? 'hiddenTab' : ''}`}>
                    <CatPicsContent />
                </div>
                <div className={`contentContainer ${selectedVersion !== 2 ? 'hiddenTab' : ''}`}>
                    <CatPicsContent2 />
                </div>
            </ThemeContext>
        </>
    );
}

export default CatPics;