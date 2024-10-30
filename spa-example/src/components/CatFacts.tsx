import { useEffect, useState } from 'react';

const CatFacts = () => {
    const [dailyFact, setDailyFact] = useState<string>('');

    useEffect(() => {
        const fetchDailyFact = async () => {
            const res = await fetch(
                "https://cat-fact.herokuapp.com/facts/5a4aab322c99ee00219e11c5"
            );
            const body = await res.json();
            setDailyFact(body.text);
        };

        fetchDailyFact();
    }, []);

    return (
        <div>
            <h1>cat fact of the day</h1>
            <div className="card">
                {dailyFact}
            </div>
        </div>
    );
};

export default CatFacts;