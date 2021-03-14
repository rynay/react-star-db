import { useEffect, useState } from 'react'
import Spinner from '../spinner'
import './person-details.css';

const PersonDetails = (props) => {
  let person;
  if(!props.person){
    person = {
      name: 'R2-D2',
      gender: 'n/a',
      birth_year: '33BBY',
      eye_color: 'red',
      id: 3,
    };
  }
  const { id, name, gender, eye_color: eyeColor, birth_year: birthYear } = props.person ? props.person : person ;
  const [ path, setPath ] = useState() 
  const [ isLoaded, setIsLoaded ] = useState(false);
  
  useEffect(() => {
    fetch(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`)
    .then((res) => {
      if(!res.ok) throw new Error();
      setPath(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`);
      setIsLoaded(true);
    })
    .catch((error) => {
      console.error(error)
    })
  }, [id])

  return (
    <div className="person-details card">
      <div className="person-image">
        { !isLoaded ? <Spinner /> : (<img
          alt="person"
          src={ path } />)}
      </div>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PersonDetails