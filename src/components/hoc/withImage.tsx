import { useEffect, useState } from 'react'
import SwapiService from '../../services/swapi-service'

type Props = {
  item?: TItem
  category: string
}

export const withImage =
  (WrappedComponent: (props: Props & { path?: string }) => JSX.Element) =>
  (props: Props) => {
    const [path, setPath] = useState<string>()

    useEffect(() => {
      const swapiService = new SwapiService()
      swapiService.getImage(props.item?.id, props.category).then((path) => {
        setPath(path)
      })
    }, [props.category, props.item?.id])

    return <WrappedComponent path={path} {...props} />
  }
