import { useEffect, useState } from 'react';
import Spinner from '../spinner';
import './starship-details.css'

const StarshipDetails = (props) => {
  const [ path, setPath ] = useState() 
  const [ isLoaded, setIsLoaded ] = useState(false);

  const { name, id, costInCredits, maxAtmospheringSpeed, maxPassengers } = props.starship;
  
  useEffect(() => {
    fetch(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)
    .then((res) => {
      if(res.ok) setPath(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
      if(!res.ok) setPath('https://grist.org/wp-content/uploads/2012/10/question-mark-earth-470.jpg');
      setIsLoaded(true);
    })
    .catch((error) => {
      console.error(error)
    })
  }, [id])

  return (
    <div className="starship-details card">
      <div className="starship-image">
        { !isLoaded ? <Spinner /> : (
          <img 
          alt="starship"
          src={path}/>
        ) }
      </div>
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Cost in credits</span>
            <span>{costInCredits}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Max atmosphering speed</span>
            <span>{maxAtmospheringSpeed}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Max passengers</span>
            <span>{maxPassengers}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

StarshipDetails.defaultProps = {
  starship: {
    name: 'Millennium Falcon',
    costInCredits: 100000,
    maxAtmospheringSpeed: 1050,
    maxPassengers: 6,
    id: 10,
  }
}

export default StarshipDetails;