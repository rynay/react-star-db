import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import SwapiService from '../../services/swapi-service';

export const withData = (WrappedComponent) => (props) => {
  const [ item, setItem ] = useState(null);
  const match = useRouteMatch();

  console.log(match)

  useEffect(() => {
    const swapiService = new SwapiService();
    swapiService.getItem(match.params.id || props.itemId, props.category).then((data) => {
      setItem(data);
    });
  }, [props.category, props.itemId, match.params.id]);

  return <WrappedComponent item={item} {...props} />;
};
