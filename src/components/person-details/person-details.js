import { withImage } from '../hoc'
import Spinner from '../spinner'
import './person-details.css';

const PersonDetails = (props) => {
  const { name, gender, eyeColor, birthYear } = props.item;

  return (
    <div className="person-details card">
      <div className="person-image">
        { !props.isLoaded ? <Spinner /> : (<img
          alt="person"
          src={ props.path } />)}
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

export default withImage(PersonDetails)