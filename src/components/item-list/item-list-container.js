import { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import ItemList from './item-list';

const ItemListContainer = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    const swapiService = new SwapiService();
    swapiService.getAll(props.category).then((data) => {
      setItems(data);
      setIsLoaded(true);
    });
  }, [props.category]);

  return <ItemList isLoaded={isLoaded} items={items} {...props} />;
};

export default ItemListContainer;
