import { useEffect, useState } from 'react';

const CatFacts = () => {
    const [dailyFact, setDailyFact] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchDailyFact = async () => {
            setIsLoading(true);
            const res = await fetch('https://ssr-sandbox.mching.dev/api/dailyfact');
            const body = await res.json();
            setDailyFact(body.dailyFact);
            setIsLoading(false);
        };

        fetchDailyFact();
    }, []);

    return (
        <div className='contentContainer'>
            <h1>cat fact of the day</h1>
            {isLoading && <div className='loadingSpinner' />}
            {!isLoading && <span className='catFact'>{dailyFact}</span>}
        </div>
    );
};

export default CatFacts;