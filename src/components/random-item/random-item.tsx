import './random-item.css'
import { useEffect, useState } from 'react'
import ItemDetails from '../item-details'

type Props = {
  category: string
}

const RandomItem = (props: Props) => {
  const [urlCategory, setUrlCategory] = useState<string>()
  const [randomItemNumber, setRandomItemNumber] = useState(9)

  useEffect(() => {
    let url = window.location.href.split('/').slice(-2, -1)[0]
    switch (url) {
      case 'planets':
      case 'people':
      case 'starships':
        setUrlCategory(url)
        break
      default:
        break
    }
  }, [window.location.href])

  const category = urlCategory || props.category

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomItemNumber(Math.floor(Math.random() * 18) + 2)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [category, window.location.href])

  return (
    <div id="random-item" className="random-item jumbotron rounded card">
      <ItemDetails
        hideSpinner={true}
        category={category}
        itemId={randomItemNumber}
        changeItemId={() => {}}
      />
    </div>
  )
}
export default RandomItem
