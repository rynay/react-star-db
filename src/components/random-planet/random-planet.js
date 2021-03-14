import './random-planet.css';
import { useEffect, useState } from 'react';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service'

const RandomPlanet = (props) => {
  const swapiService = new SwapiService();
  const [ planet, setPlanet ] = useState({
    name: "Coruscant",
    rotation_period: "24",
    diameter: "12240",
    population: "1000000000000",
    id: 9,
  });

  useEffect(()=>{
    const interval = setInterval(() => {
      const randomPlanetNumber = Math.floor(Math.random() * 18) + 2;
      swapiService.getItem(randomPlanetNumber, props.category)
      .then((item) => {
        setPlanet(item);
      })
    }, 3500)

    return () => { 
      clearInterval(interval)
    }
  }, [planet])

  return (
    <div id="random-planet" className="random-planet jumbotron rounded card">
      <ItemDetails category="planets" item={planet}/>
    </div>
  );
  
}
export default RandomPlanet;