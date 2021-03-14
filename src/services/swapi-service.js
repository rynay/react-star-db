export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  getAll = async (category) => {
    const res = await this.getResource(`/${category}/`);
    return res.results.map(item => this._transform(item, category));
  }

  getItem = async (id, category) => {
    const item = await this.getResource(`/${category}/${id}/`);
    return this._transform(item, category);
  }

  _transform(item, category){

    switch(category){
      case 'people':
        return {
          name: item.name,
          gender: item.gender,
          eyeColor: item.eye_color,
          birthYear: item.birth_year,
          id: item.url.match(/\/([0-9]+)\/$/)[1],
        }
      case 'planets':
        return {
          name: item.name,
          population: item.population,
          rotationPeriod: item.rotation_period,
          diameter: item.diameter,
          id: item.url.match(/\/([0-9]+)\/$/)[1],
        }
      case 'starships':
        return {
          name: item.name,
          costInCredits: item.cost_in_credits,
          maxAtmospheringSpeed: item.max_atmosphering_speed,
          maxPassengers: item.max_passengers,
          id: item.url.match(/\/([0-9]+)\/$/)[1],
        }
      default: 
        return item;
    }
  }
}
