import { useEffect, useState } from 'react';
import Spinner from '../spinner';

const PlanetDetails = (props) => {
  const [ path, setPath ] = useState() 
  const [ isLoaded, setIsLoaded ] = useState(false);

  let planet;
  if(!props.planet){
    planet = {
      name: 'Alderaan',
      population: '2000000000',
      rotation_period: '24',
      diameter: '12500',
      id: 2,
    };
  }
  const { name, population, rotation_period: rotationPeriod, diameter, id } = props.planet ? props.planet: planet;
  
  useEffect(() => {
    fetch(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`)
    .then((res) => {
      if(res.ok) setPath(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`);
      if(!res.ok) setPath('https://grist.org/wp-content/uploads/2012/10/question-mark-earth-470.jpg');
      setIsLoaded(true);
    })
    .catch((error) => {
      console.error(error)
    })
  }, [id])


  return (
    <>
      <div className="planet-image">
        { !isLoaded ? <Spinner /> : (
          <img 
          alt="planet"
          src={path}/>
        ) }
      </div>
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PlanetDetails;