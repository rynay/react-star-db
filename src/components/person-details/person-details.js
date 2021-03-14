import { useEffect, useState } from 'react'
import Spinner from '../spinner'
import './person-details.css';

const PersonDetails = (props) => {
  const { id, name, gender, eyeColor, birthYear } = props.item;
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

PersonDetails.defaultProps = {
    item: {
      name: 'R2-D2',
      gender: 'n/a',
      birthYear: '33BBY',
      eyeColor: 'red',
      id: 3,
    }
}

export default PersonDetails