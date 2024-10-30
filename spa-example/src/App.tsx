import { useState } from 'react'
import CatFacts from './components/CatFacts';
import CatPics from './components/CatPics';

function App() {
    const [currentPage, setCurrentPage] = useState<'facts' | 'pics'>('facts');

    let linkString = '';
    if (currentPage === 'facts') {
        linkString = 'go to cat pics';
    } else if (currentPage === 'pics') {
        linkString = 'go to cat facts';
    }

    const handleLinkClick = () => {
        setCurrentPage(prevPage => prevPage === 'facts' ? 'pics' : 'facts');
    };

    return (
        <div id="app">
            <button onClick={handleLinkClick}>{linkString}</button>
            {currentPage === 'facts' && <CatFacts />}
            {currentPage === 'pics' && <CatPics />}
        </div>
    );
}

export default App
