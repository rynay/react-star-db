import { useState } from 'react';
import Spinner from '../spinner';

const PlanetDetails = (props) => {
  const [ path, setPath ] = useState() 
  const [ isLoaded, setIsLoaded ] = useState(false);
  
  fetch(`https://starwars-visualguide.com/assets/img/planets/${props.planet.id}.jpg`)
  .then((res) => {
    if(res.ok) setPath(`https://starwars-visualguide.com/assets/img/planets/${props.planet.id}.jpg`);
    if(!res.ok) setPath('https://grist.org/wp-content/uploads/2012/10/question-mark-earth-470.jpg');
    setIsLoaded(true);
  })

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
        <h4>{props.planet.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{props.planet.population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{props.planet.rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{props.planet.diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PlanetDetails;