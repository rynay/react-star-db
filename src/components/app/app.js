import React, { useEffect, useState } from 'react';

import Spinner from '../spinner';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import StarshipDetails from '../starship-details';
import Row from '../row'

import './app.css';

const App = () => {
  const [ isPersonLoaded, setIsPersonLoaded ] = useState(true); 
  const [ isPlanetLoaded, setIsPlanetLoaded ] = useState(true); 
  const [ isStarshipLoaded, setIsStarshipLoaded ] = useState(true); 
  const [ person, setPerson ] = useState();
  const [ planet, setPlanet ] = useState();
  const [ starship, setStarship ] = useState();

  const getItem = (id, category) => {
    switch(category){
      case 'people':
        setIsPersonLoaded(false);
        break;
      case 'planets':
        setIsPlanetLoaded(false);
        break;
      case 'starships':
        setIsStarshipLoaded(false);
        break;
      default: 
        break;
    }
    fetch(`https://swapi.dev/api/${category}/${id}`)
    .then(res => {
      if(!res.ok) throw new Error();
      return res.json()
    })
    .then(data => {
      switch(category){
        case 'people':
          changeStates(data, setPerson, setIsPersonLoaded);
          break;
        case 'planets':
          changeStates(data, setPlanet, setIsPlanetLoaded);
          break;
        case 'starships':
          changeStates(data, setStarship, setIsStarshipLoaded);
          break;
        default: 
          break;
      }
    })
  }

  const changeStates = (data, func, loaded) => {
    func({
      ...data,
      id: data.url.match(/\/([0-9]+)\/$/)[1] 
    })
    loaded(true);
  }

  return (
    <div className="container">
      <Header />
      <RandomPlanet />

      <Row 
        left={<ItemList category="people" handleClick={getItem}/>}
        right={!isPersonLoaded ? <Spinner /> : <PersonDetails person={person}/>}
      />
      <Row
        left={<ItemList category="planets" handleClick={getItem}/>}
        right={!isPlanetLoaded ? <Spinner /> : <PlanetDetails planet={planet}/>}
      />
      <Row 
        left={<ItemList category="starships" handleClick={getItem}/>}
        right={!isStarshipLoaded ? <Spinner /> : <StarshipDetails starship={starship}/>}
      />
    </div>
  );
};

export default App;