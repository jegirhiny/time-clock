import '../search/search.styles.css';
import { useEffect, useState } from 'react';
import { getEmployeesByName } from '../../static/employee-utils';

const Search = ({ pullRequest }) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        pullRequest(getEmployeesByName(search));
    }, [search])

    return (
        <div className='container'>
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search}/>
        </div>
    )
}

export default Search;