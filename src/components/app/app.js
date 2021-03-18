import React, { useEffect, useState } from 'react';

import Spinner from '../spinner';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import SwapiService from '../../services/swapi-service';
import { Switch, Route } from 'react-router-dom';

import './app.css';

const App = () => {
  // const [isPersonLoaded, setIsPersonLoaded] = useState(true);
  // const [isPlanetLoaded, setIsPlanetLoaded] = useState(true);
  // const [isStarshipLoaded, setIsStarshipLoaded] = useState(true);
  // const [person, setPerson] = useState();
  // const [planet, setPlanet] = useState();
  // const [starship, setStarship] = useState();
  
  // const swapiService = new SwapiService();
  

  // const getItem = (id, category) => {
  //   switch (category) {
  //     case 'people':
  //       setIsPersonLoaded(false);
  //       break;
  //     case 'planets':
  //       setIsPlanetLoaded(false);
  //       break;
  //     case 'starships':
  //       setIsStarshipLoaded(false);
  //       break;
  //     default:
  //       break;
  //   }
  //   swapiService.getItem(id, category).then((data) => {
  //     switch (category) {
  //       case 'people':
  //         changeStates(data, setPerson, setIsPersonLoaded);
  //         break;
  //       case 'planets':
  //         changeStates(data, setPlanet, setIsPlanetLoaded);
  //         break;
  //       case 'starships':
  //         changeStates(data, setStarship, setIsStarshipLoaded);
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // };
  // const changeStates = (data, func, loaded) => {
  //   func({ ...data });
  //   loaded(true);
  // };

  const [ itemId, setItemId ] = useState(1);

  const changeItemId = (id) => {
    setItemId(id);
  }

  return (
    <div className="container">
      <Header />
      {/* <RandomPlanet category="planets" /> */}

        <Switch>
          <Route path="/people/:id?">
            <Row
              left={
                  <ItemList category="people" handleClick={changeItemId} />
              }
              right={<ItemDetails category="people" itemId={itemId} />}
            />
          </Route>

          <Route path="/planets/:id?">
            <Row
              left={<ItemList category="planets" handleClick={changeItemId} />}
              right={<ItemDetails category="planets" itemId={itemId} />}
            />
          </Route>

          <Route path="/starships/">
            <Row
              left={<ItemList category="starships" handleClick={changeItemId} />}
              right={<ItemDetails category="starships" itemId={itemId} />}
            />
          </Route>
        </Switch>
    </div>
  );
};

export default App;
