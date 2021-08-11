import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'

type Props = {
  hideSpinner?: boolean
  itemId: TItem['id'] | null
  changeItemId: (id: Props['itemId']) => void
  category: string
}

export const withData =
  (WrappedComponent: (props: Props & { item?: TItem }) => JSX.Element) =>
  (props: Props) => {
    const [item, setItem] = useState<TPerson | TPlanet | TStarship>()
    const [isLoaded, setIsLoaded] = useState(true)
    const match: {
      params: {
        id: string
      }
    } = useRouteMatch()

    useEffect(() => {
      props.changeItemId(null)
    }, [props])

    useEffect(() => {
      props.hideSpinner || setIsLoaded(false)
      const swapiService = new SwapiService()
      swapiService
        .getItem(+match.params.id || props.itemId || 5, props.category)
        .then((data) => {
          if (data) {
            setItem(data)
          }
          props.hideSpinner || setIsLoaded(true)
        })
    }, [props, match.params.id])

    return isLoaded ? <WrappedComponent item={item} {...props} /> : <Spinner />
  }
