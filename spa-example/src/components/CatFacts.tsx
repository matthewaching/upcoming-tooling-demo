import { useEffect, useState } from 'react';

const CatFacts = () => {
    const [dailyFact, setDailyFact] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchDailyFact = async () => {
            setIsLoading(true);
            const res = await fetch(
                "https://cat-fact.herokuapp.com/facts/5a4aab322c99ee00219e11c5"
            );
            const body = await res.json();
            setDailyFact(body.text);
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