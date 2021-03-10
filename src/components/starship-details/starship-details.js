import { useState } from 'react';
import Spinner from '../spinner';
import './starship-details.css'

const StarshipDetails = (props) => {
  const [ path, setPath ] = useState() 
  const [ isLoaded, setIsLoaded ] = useState(false);

  let starship;
  if(!props.starship){
    starship = {
      name: 'Millennium Falcon',
      cost_in_credits: 100000,
      max_atmosphering_speed: 1050,
      passengers: 6,
      id: 10,
    };
  }
  const { name, id, cost_in_credits: costInCredits, max_atmosphering_speed: maxAtmospheringSpeed, passengers } = props.starship ? props.starship: starship;
  
  fetch(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)
  .then((res) => {
    if(res.ok) setPath(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
    if(!res.ok) setPath('https://grist.org/wp-content/uploads/2012/10/question-mark-earth-470.jpg');
    setIsLoaded(true);
  })
  .catch((error) => {
    console.error(error)
  })

  return (
    <>
      <div className="starship-image">
        { !isLoaded ? <Spinner /> : (
          <img 
          alt="starship"
          src={path}/>
        ) }
      </div>
      <div>
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
            <span>{passengers}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default StarshipDetails;