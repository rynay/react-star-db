import React from 'react'
import Spinner from '../spinner'
import './item-list.css'
import { Link } from 'react-router-dom'

type Props = {
  isLoaded: boolean
  items?: TItem[]
  category: string
  handleClick?: (id: TItem['id'], category: Props['category']) => void
}

const ItemList = ({ isLoaded, items, handleClick, category }: Props) => {
  return (
    <ul className="item-list list-group">
      {!isLoaded ? (
        <Spinner />
      ) : (
        items &&
        items.map((item) => {
          return (
            <Link key={item.id} to={`/${category}/${item.id}`}>
              <li
                className="list-group-item"
                onClick={() => handleClick && handleClick(item.id, category)}>
                {item.name} (
                {item.diameter || item.cost_in_credits || item.birth_year})
              </li>
            </Link>
          )
        })
      )}
    </ul>
  )
}

export default ItemList
