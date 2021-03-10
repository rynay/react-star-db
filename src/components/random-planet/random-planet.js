import './random-planet.css';
import { useEffect, useState } from 'react';
import Spinner from '../spinner'

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
    console.log(random)
    fetch(`https://swapi.dev/api/planets/${random}`)
    .then(res => {
      if(!res.ok) throw new Error('Ooopss... Something went wrong!');

      return res.json()
    })
    .then(data => {
      const { name, rotation_period : rotationPeriod , population, diameter } = data;
      const id = data.url.match(/\/([0-9])\/$/)[1];
      console.log(id);
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
        <>
          <img className="planet-image"
            alt="planet"
            src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`} />
          <div>
            <h4>{planet.name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Population</span>
                <span>{planet.population}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Rotation Period</span>
                <span>{planet.rotationPeriod}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Diameter</span>
                <span>{planet.diameter}</span>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
  
}
export default RandomPlanet;