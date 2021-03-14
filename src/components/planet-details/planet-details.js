import { withImage } from '../hoc'
import Spinner from '../spinner';
import './planet-details.css'

const PlanetDetails = (props) => {
  const { name, population, rotationPeriod, diameter} = props.item;
  return (
    <div className="planet-details card">
      <div className="planet-image">
        { !props.isLoaded ? <Spinner /> : (
          <img 
          alt="planet"
          src={props.path}/>
        ) }
      </div>
      <div className="card-body">
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
    </div>
  );
}

PlanetDetails.defaultProps = {
  item: {
    name: 'Alderaan',
    population: '2000000000',
    rotationPeriod: '24',
    diameter: '12500',
    id: 2,
  }
}

export default withImage(PlanetDetails);