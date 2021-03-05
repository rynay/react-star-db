class SwapiApi {
  
  async getResource(url){
    const res = await fetch(url);
    if(!res.ok) throw new Error();
    const data = await res.json();
    return data;
  }

  async getAllPersons(){
    const people = await this.getResource('https://swapi.dev/api/people/'); 
    return people.results;
  }
  async getPerson(id) {
    const person = await this.getResource(`https://swapi.dev/api/people/${id}/`);
    return person;
  }

  async getAllStarships() {
    const starships = await this.getResource('https://swapi.dev/api/starships/');
    return starships.results;
  }

  async getStarship(id) {
    const starship = await this.getResource(`https://swapi.dev/api/starships/${id}`);
    return starship;
  }
  async getAllPlanets() {
    const planets = await this.getResource(`https://swapi.dev/api/planets/`)
    return planets;
  }
  async getPlanet(id){
    const planet = await this.getResource(`https://swapi.dev/api/planets/${id}/`);
    return planet;
  }
}
