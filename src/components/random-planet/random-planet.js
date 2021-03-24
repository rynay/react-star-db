import './random-planet.css';
import { useEffect, useState } from 'react';
import ItemDetails from '../item-details';

const RandomPlanet = (props) => {
  const [randomPlanetNumber, setRandomPlanetNumber] = useState(9);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomPlanetNumber(Math.floor(Math.random() * 18) + 2);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [props.category]);

  return (
    <div id="random-planet" className="random-planet jumbotron rounded card">
      <ItemDetails
        hideSpinner
        category="planets"
        itemId={randomPlanetNumber}
        changeItemId={() => {}}
      />
    </div>
  );
};
export default RandomPlanet;
