export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(item => this._transformPerson(item));
  }
  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(item => this._transformPlanet(item));
  }
  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(item => this._transformStarship(item));
  }

  
  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }
  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }
  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }


  _transformPerson(person){
    console.log(person)
    const id = person.url.match(/\/([0-9])\/$/)
    const { 
      name, 
      gender, 
      eye_color: eyeColor, 
      birth_year: birthYear } = person;
    return {
      name,
      gender,
      eyeColor,
      birthYear,
      id,
    }
  }
  _transformStarship(starship){
    console.log(starship)
    const id = starship.url.match(/\/([0-9])\/$/)
    const { 
      name, 
      cost_in_credits: costInCredits,
      max_atmosphering_speed: maxAtmospheringSpeed,
      max_passengers: maxPassengers,
     } = starship;
    return {
      name,
      costInCredits,
      maxAtmospheringSpeed,
      maxPassengers,
      id,
    }
  }
  _transformPlanet(planet){
    console.log(planet)
    const id = planet.url.match(/\/([0-9])\/$/)
    const { 
      name, 
      population, 
      rotation_period: rotationPeriod, 
      diameter } = planet;
    return {
      name,
      population,
      rotationPeriod,
      diameter,
      id,
    }
  }
}
