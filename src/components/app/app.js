import React, { useEffect, useState } from 'react';

import Spinner from '../spinner';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import { Switch, Route } from 'react-router-dom';

import './app.css';

const App = () => {
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

          <Route path="/starships/:id?">
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
