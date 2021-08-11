import Spinner from '../spinner'
import './item-list.css'
import { Link } from 'react-router-dom'

type Props = {
  isLoaded: boolean
  items?: (TPerson | TPlanet | TStarship | undefined)[]
  category: string
  handleClick?: (
    id: TItem['id'] | undefined,
    category: Props['category']
  ) => void
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
            <Link key={item?.id} to={`/${category}/${item?.id}`}>
              <li
                className="list-group-item"
                onClick={() => handleClick && handleClick(item?.id, category)}>
                {item?.name} ({item && 'diameter' in item && item.diameter}
                {item && 'cost_in_credits' in item && item.cost_in_credits}
                {item && 'birth_year' in item && item.birth_year})
              </li>
            </Link>
          )
        })
      )}
    </ul>
  )
}

export default ItemList
