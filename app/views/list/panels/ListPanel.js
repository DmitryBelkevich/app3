import CssLoader from '../../loaders/CssLoader.js';

import GenreComponent from '../components/GenreComponent.js';
import SongComponent from '../components/SongComponent.js';

export default class ListPanel {
  #cssLoader = new CssLoader();
  #components = [];
  
  constructor(genres) {
    this.#cssLoader.load("./app/views/list/css/genre.css");
    this.#cssLoader.load("./app/views/list/css/song.css");
    
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
