
const PlanetDetails = (props) => {
  return (
    <>
      <img className="planet-image"
        alt="planet"
        src={`https://starwars-visualguide.com/assets/img/planets/${props.planet.id}.jpg`} />
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