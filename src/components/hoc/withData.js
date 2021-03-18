import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export const withData = (WrappedComponent) => (props) => {
  const [ item, setItem ] = useState(null);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const match = useRouteMatch();

  useEffect(() => {
    setIsLoaded(false);
    const swapiService = new SwapiService();
    swapiService.getItem(match.params.id || props.itemId, props.category).then((data) => {
      setItem(data);
      setIsLoaded(true);
    });
  }, [props.category, props.itemId, match.params.id]);

  return (
    isLoaded ? <WrappedComponent item={item} {...props} /> : <Spinner />
  )
};
