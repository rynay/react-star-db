import { useState, useEffect } from 'react';
import Spinner from '../spinner'
import './item-list.css';

const ItemList = () => {
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ people, setPeople ] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data.results)
      const newData = [...data.results].map(person => ({
        ...person,
        id: person.url.match(/\/([0-9]+)\/$/),
      }))
      setPeople(newData)
      setIsLoaded(true);
    })
  }, [])

    return (
      <ul className="item-list list-group">
      {!isLoaded ? <Spinner /> : people.map((person) => {
        return (
        <li key={person.id} className="list-group-item">
          {person.name}
        </li>)
      })}
      </ul>
    );
}

export default ItemList;