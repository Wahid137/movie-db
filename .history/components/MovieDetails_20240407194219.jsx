import { useEffect, useState } from 'react';
import { getDictionary } from './path/to/your/util';

export default async function MovieDetails ({ id, lang }) => {
    const [entry, setEntry] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDictionary('all');
            const specificEntry = data.find(entry => entry.id === id);
            setEntry(specificEntry);
        };

        fetchData();
    }, [id]);

    if (!entry) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Movie Details</h1>
      
        </div>
    );
};


