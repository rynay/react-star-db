export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    try{
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
      }
      return await res.json();
    } catch(e) {
      console.error(e)
    }
  };

  getAll = async (category) => {
    const res = await this.getResource(`/${category}/`);
    return res.results.map((item) => this._transform(item, category));
  };

  getItem = async (id, category) => {
    const item = await this.getResource(`/${category}/${id}/`);
    return this._transform(item, category);
  };

  getImage = async (id, category) => {
    if (!id || !category) {
      return 'https://grist.org/wp-content/uploads/2012/10/question-mark-earth-470.jpg';
    }
    if (category === 'people') {
      category = 'characters';
    }

    const res = await fetch(
      `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`
    );
    if (res.ok)
      return `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`;
    if (!res.ok)
      return 'https://grist.org/wp-content/uploads/2012/10/question-mark-earth-470.jpg';
  };

  _transform(item, category) {
    switch (category) {
      case 'people':
        return {
          name: item.name,
          gender: item.gender,
          eye_color: item.eye_color,
          birth_year: item.birth_year,
          id: item.url.match(/\/([0-9]+)\/$/)[1],
        };
      case 'planets':
        return {
          name: item.name,
          population: item.population,
          rotation_period: item.rotation_period,
          diameter: item.diameter,
          id: item.url.match(/\/([0-9]+)\/$/)[1],
        };
      case 'starships':
        return {
          name: item.name,
          cost_in_credits: item.cost_in_credits,
          max_atmosphering_speed: item.max_atmosphering_speed,
          passengers: item.passengers,
          id: item.url.match(/\/([0-9]+)\/$/)[1],
        };
      default:
        return item;
    }
  }
}
