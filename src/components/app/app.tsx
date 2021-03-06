import { useState } from 'react'

import Header from '../header'
import RandomItem from '../random-item'
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import Row from '../row'
import { Switch, Route } from 'react-router-dom'

import './app.css'

const App = () => {
  const [itemId, setItemId] = useState<number | null>(5)

  const changeItemId = (id: number | null) => {
    setItemId(id)
  }

  return (
    <div className="container">
      <Header />
      <RandomItem category="people" />

      <Switch>
        <Route path="/people/:id?">
          <Row
            left={<ItemList category="people" handleClick={changeItemId} />}
            right={
              <ItemDetails
                category="people"
                changeItemId={changeItemId}
                itemId={itemId}
              />
            }
          />
        </Route>

        <Route path="/planets/:id?">
          <Row
            left={<ItemList category="planets" handleClick={changeItemId} />}
            right={
              <ItemDetails
                category="planets"
                changeItemId={changeItemId}
                itemId={itemId}
              />
            }
          />
        </Route>

        <Route path="/starships/:id?">
          <Row
            left={<ItemList category="starships" handleClick={changeItemId} />}
            right={
              <ItemDetails
                category="starships"
                changeItemId={changeItemId}
                itemId={itemId}
              />
            }
          />
        </Route>
      </Switch>
    </div>
  )
}

export default App
