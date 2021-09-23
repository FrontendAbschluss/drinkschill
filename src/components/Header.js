import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <h1>Header</h1>
            <Link to={'/'}>To home</Link>
            Searchfield Button onClick -> value <Link to={'/search-results'}>to search results</Link>
        </div>
    );
}

export default Header;