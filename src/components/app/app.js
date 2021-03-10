import React, { useEffect, useState } from 'react';

import Spinner from '../spinner';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
  const [ isLoaded, setIsLoaded ] = useState(true); 
  const [ person, setPerson ] = useState({
    name: 'R2-D2',
    gender: 'n/a',
    birthYear: '33BBY',
    eyeColor: 'red',
    id: 3,
  });

  const getPerson = (id) => {
    setIsLoaded(false)
    fetch(`https://swapi.dev/api/people/${id}`)
    .then(res => {
      if(!res.ok) throw new Error();
      return res.json()
    })
    .then(data => {
      const { name, gender, birth_year: birthYear, eye_color:  eyeColor } = data;
      setPerson({
        name,
        gender,
        birthYear,
        eyeColor,
        id,
      })
      setIsLoaded(true);
    })
  }

  return (
    <div className="container">
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList handleClick={getPerson}/>
        </div>
        <div className="col-md-6">
          { !isLoaded ? <Spinner /> : <PersonDetails person={person}/>}
          
        </div>
      </div>
    </div>
  );
};

export default App;