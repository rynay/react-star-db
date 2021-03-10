import './random-planet.css';
import { useEffect, useState } from 'react';
import PlanetDetails from '../planet-details'
import Spinner from '../spinner';

const RandomPlanet = () => {
  const [ isLoaded, setIsLoaded ] =  useState(false);
  const [ planet, setPlanet ] = useState(null);

  useEffect(()=>{
    setIsLoaded(false);
    const interval = setInterval(() => {
      const randomPlanetNumber = Math.floor(Math.random() * 18) + 2;
      fetch(`https://swapi.dev/api/planets/${randomPlanetNumber}`)
      .then(res => {
        if(!res.ok) throw new Error('Ooopss... Something went wrong!');

        return res.json()
      })
      .then(data => {
        const randomPlanet = data;
        const { name, rotation_period : rotationPeriod , population, diameter } = randomPlanet;
        const id = randomPlanet.url.match(/\/([0-9]+)\/$/)[1];
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
    }, 3500)

    return () => { clearInterval(interval) }
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