import { useState, useEffect } from 'react';
import Spinner from '../spinner'
import './item-list.css';
import SwapiService from '../../services/swapi-service'

const ItemList = (props) => {
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ items, setItems ] = useState(null);

  const swapiService = new SwapiService();

  useEffect(() => {
    swapiService.getAll(props.category)
    .then((data) =>{
      setItems(data);
      setIsLoaded(true);
    })
  }, [])
    return (
      <ul className="item-list list-group">
      {!isLoaded ? <Spinner /> : items.map((item) => {
        return (
        <li  
          key={item.id} 
          className="list-group-item"
          onClick={() => props.handleClick(item.id, props.category)}>
          {item.name} ({ item.diameter || item.costInCredits || item.birthYear})
        </li>)
      })}
      </ul>
    );
}

export default ItemList;