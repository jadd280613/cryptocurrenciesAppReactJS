import axios from 'axios';
import { useEffect, useState } from 'react';
import { TableCoins } from './components/TableCoins';

function App() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    const getData = async () => {
        const res = await axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
        );
        setCoins(res.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
              <h1 className="text-center">Top 100 cryptocurrencies</h1>
                <input
                    type='text'
                    placeholder='Search a coin'
                    className='form-control bg-dark text-light border-0 mt-4 text-center'
                    onChange={ e => setSearch(e.target.value) }
                />
                <TableCoins coins={coins} search={search} />
            </div>
        </div>
    );
}

export default App;
