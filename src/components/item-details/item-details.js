import './item-details.css';
import { withImage, withData } from '../hoc';

const ItemDetails = (props) => {
  if (!props.item) {
    return <p>Please choose an object</p>;
  }
  const { name } = props.item;

  const toCapitalize = (word) => word[0].toUpperCase() + word.slice(1);
  const records = Object.entries(props.item)
    .filter(([key]) => key !== 'name' && key !== 'id')
    .map((data, idx) => {
      const [key, value] = data;
      return (
        <li key={idx} className="list-group-item">
          <span className="term">
            {key
              .split('_')
              .map((word) => toCapitalize(word))
              .join(' ')}
          </span>
          <span>{value}</span>
        </li>
      );
    });

  return (
    <div className="item-details card">
      <div className="item-image">
        <img alt="" src={props.path} />
      </div>
      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">{records}</ul>
      </div>
    </div>
  );
};

export default withData(withImage(ItemDetails));
