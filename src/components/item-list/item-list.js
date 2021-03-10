import { useState, useEffect } from 'react';
import Spinner from '../spinner'
import './item-list.css';

const ItemList = (props) => {
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ items, setItems ] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/${props.category}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      const newData = data.results.slice(0, 5).map(item => ({
        ...item,
        id: item.url.match(/\/([0-9]+)\/$/)[1],
      }))
      setItems(newData);
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
          {item.name}
        </li>)
      })}
      </ul>
    );
}

export default ItemList;