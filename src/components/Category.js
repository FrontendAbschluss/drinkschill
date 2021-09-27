import { Link } from 'react-router-dom';

const Category = (props) => {
    return (
        <Link to={`/category/${props.ingredient}`}>
            <div>
                <h2>
                    {props.name}
                </h2>
            </div >
        </Link>
    );
}

export default Category;