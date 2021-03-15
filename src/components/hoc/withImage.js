import { useEffect, useState } from 'react';
import SwapiService from '../../services/swapi-service';

export const withImage = (WrappedComponent) => (props) => {
  const [path, setPath] = useState(null);

  useEffect(() => {
    const swapiService = new SwapiService();
    swapiService.getImage(props.item?.id, props.category).then((path) => {
      setPath(path);
    });
  }, [props.category, props.item?.id]);

  return <WrappedComponent path={path} {...props} />;
};
