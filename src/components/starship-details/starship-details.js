import Spinner from '../spinner';
import './starship-details.css';
import { withImage } from '../hoc'

const StarshipDetails = (props) => {
  const { name, costInCredits, maxAtmospheringSpeed, maxPassengers } = props.item;

  return (
    <div className="starship-details card">
      <div className="starship-image">
        { !props.isLoaded ? <Spinner /> : (
          <img 
          alt="starship"
          src={props.path}/>
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
  item: {
    name: 'Millennium Falcon',
    costInCredits: 100000,
    maxAtmospheringSpeed: 1050,
    maxPassengers: 6,
    id: 10,
  }
}

export default withImage(StarshipDetails);