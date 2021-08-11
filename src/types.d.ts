type TItem = {
  id: number
  name: string
  url: string
}

type TPerson = TItem & {
  category: 'people'
  birth_year: string
  gender: string
  eye_color: string
}

type TPlanet = TItem & {
  category: 'planets'
  population: number
  rotation_period: number
  diameter: number
}

type TStarship = TItem & {
  category: 'starships'
  cost_in_credits: number
  max_atmosphering_speed: number
  passengers: number
}
