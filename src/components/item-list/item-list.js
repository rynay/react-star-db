import { useState, useEffect } from 'react';
import Spinner from '../spinner';
import './item-list.css';
import SwapiService from '../../services/swapi-service';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const ItemList = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);
  const match = useRouteMatch();

  useEffect(() => {
    setIsLoaded(false);
    const swapiService = new SwapiService();
    swapiService.getAll(props.category).then((data) => {
      setItems(data);
      setIsLoaded(true);
    });
  }, [props.category]);

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
