import React, { useState } from 'react';

import Spinner from '../spinner';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import SwapiService from '../../services/swapi-service';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.css';

const App = () => {
  const [isPersonLoaded, setIsPersonLoaded] = useState(true);
  const [isPlanetLoaded, setIsPlanetLoaded] = useState(true);
  const [isStarshipLoaded, setIsStarshipLoaded] = useState(true);
  const [person, setPerson] = useState();
  const [planet, setPlanet] = useState();
  const [starship, setStarship] = useState();

  const swapiService = new SwapiService();

  const getItem = (id, category) => {
    switch (category) {
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
    swapiService.getItem(id, category).then((data) => {
      switch (category) {
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
    });
  };
  const changeStates = (data, func, loaded) => {
    func({ ...data });
    loaded(true);
  };

  return (
    <div className="container">
      <Router>
      <Header />
      <RandomPlanet category="planets" />

        <Switch>
          <Route path="/people/">
            <Row
              left={<ItemList category="people" handleClick={getItem} />}
              right={
                !isPersonLoaded ? <Spinner /> : (
                  <ItemDetails category="people" item={person} />
                )
              }
            />
          </Route>

          <Route path="/planets/">
            <Row
              left={<ItemList category="planets" handleClick={getItem} />}
              right={
                !isPlanetLoaded ? <Spinner /> : (
                  <ItemDetails category="planets" item={planet} />
                )
              }
            />
          </Route>

          <Route path="/starships/">
            <Row
              left={<ItemList category="starships" handleClick={getItem} />}
              right={
                !isStarshipLoaded ? <Spinner /> : (
                  <ItemDetails category="starships" item={starship} />
                )
              }
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
