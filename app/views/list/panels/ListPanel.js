import GenreComponent from './components/GenreComponent.js';
import SongComponent from './components/SongComponent.js';

export default class ListPanel {
  #components = [];
  
  constructor(genres) {
    for (const genre of genres) {
      this.#components.push(new GenreComponent(genre));

      for (const song of genre.songs)
        this.#components.push(new SongComponent(song));
    }
  }

  init() {
    for (const component of this.#components)
      component.init();
  }

  get components() {
    return this.#components;
  }
}
