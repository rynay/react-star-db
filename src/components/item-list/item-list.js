import Spinner from '../spinner';
import './item-list.css';
import { Link } from 'react-router-dom';

const ItemList = (props) => {
  const { isLoaded, items } = props;
  return (
    <ul className="item-list list-group">
      {!isLoaded ? (
        <Spinner />
      ) : (
        items.map((item) => {
          return (
            <Link key={item.id} to={`/${props.category}/${item.id}`}>
              <li
                className="list-group-item"
                onClick={() => props.handleClick(item.id, props.category)}
              >
                {item.name} (
                {item.diameter || item.cost_in_credits || item.birth_year})
              </li>
            </Link>
          );
        })
      )}
    </ul>
  );
};

export default ItemList;
