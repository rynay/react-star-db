import React from 'react'
import { useState, useEffect } from 'react'
import SwapiService from '../../services/swapi-service'
import ItemList from './item-list'

type Props = {
  category: string
  handleClick: (id: number) => void
}

const ItemListContainer = (props: Props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState<TItem[]>()

  useEffect(() => {
    setIsLoaded(false)
    const swapiService = new SwapiService()
    swapiService.getAll(props.category).then((data) => {
      setItems(data)
      setIsLoaded(true)
    })
  }, [props.category])

  return <ItemList isLoaded={isLoaded} items={items} {...props} />
}

export default ItemListContainer
