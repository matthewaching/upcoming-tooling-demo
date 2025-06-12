import CatPicsContent2 from '@/components/CatPicsContent2';
import Head from 'next/head';

export default function CatPics2() {
    return (
        <>
            <Head>
                <title>cat pics v2</title>
            </Head>
            <div className='contentContainer'>
                <CatPicsContent2 />
            </div>
        </>
    );
}
