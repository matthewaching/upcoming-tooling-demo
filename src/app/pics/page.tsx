import CatPicsContent from '@/components/CatPicsContent';
import Head from 'next/head';
import Link from 'next/link';

export default function CatPics() {
    return (
        <>
            <Head>
                <title>cat pics</title>
            </Head>
            <Link href='/'>go to cat facts</Link>
            <div className='contentContainer'>
                <CatPicsContent />
            </div>
        </>
    );
}
