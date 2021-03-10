import { useState } from 'react';

const PlanetDetails = (props) => {
  const [ path, setPath ] = useState('https://grist.org/wp-content/uploads/2012/10/question-mark-earth-470.jpg') 
  
  fetch(`https://starwars-visualguide.com/assets/img/planets/${props.planet.id}.jpg`)
  .then((res) => {
    if(res.ok) setPath(`https://starwars-visualguide.com/assets/img/planets/${props.planet.id}.jpg`);
  })
  return (
    <>
      <img className="planet-image"
        alt="planet"
        src={path}/>
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