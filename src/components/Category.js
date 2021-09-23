import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            Category: fetch, map
            onClick -> CategoryResults
            <Link to='/category-results'>Click on category</Link>
        </div>
    );
}

export default Category;