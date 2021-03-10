import './random-planet.css';
import { useEffect, useState } from 'react';
import PlanetDetails from '../planet-details'
import Spinner from '../spinner';

const RandomPlanet = () => {
  const [ isLoaded, setIsLoaded ] =  useState(false);
  const [ planet, setPlanet ] = useState({
    name: 'unknown',
    population: 'unknown',
    rotationPeriod: 'unknown',
    diameter: 'unknown',
    id: 1,
  });

  useEffect(()=>{
    setIsLoaded(false);
    const random = Math.floor(Math.random() * 8) + 2;
    fetch(`https://swapi.dev/api/planets/${random}`)
    .then(res => {
      if(!res.ok) throw new Error('Ooopss... Something went wrong!');

      return res.json()
    })
    .then(data => {
      const { name, rotation_period : rotationPeriod , population, diameter } = data;
      const id = data.url.match(/\/([0-9])\/$/)[1];
      setPlanet({
        name,
        rotationPeriod,
        population,
        diameter,
        id,
      });
      setIsLoaded(true);
    })
    .catch((err) => {
      console.error(err.message);
    })
    .finally(() => {
      setIsLoaded(true);
    })
  }, [])

  return (
    <div className="random-planet jumbotron rounded">
      {!isLoaded ? <Spinner /> : (
        <PlanetDetails planet={planet}/>
      )}
    </div>
  );
  
}
export default RandomPlanet;