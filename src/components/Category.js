import { Link } from 'react-router-dom';

const Category = (props) => {
    return (
        <div>
            <h2>
                {props.ingredient}
            </h2>
            <Link to={`/category/${props}`}>Category</Link>
        </div >
    );
}

export default Category;