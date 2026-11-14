import CssLoader from '../../loaders/CssLoader.js';

import GenreComponent from '../components/GenreComponent.js';
import SongComponent from '../components/SongComponent.js';

export default class ListPanel {
  #cssLoader = new CssLoader();
  #element;
  #components = [];
  
  constructor(genres) {
    this.#cssLoader.load("./app/views/list/css/genre.css");
    this.#cssLoader.load("./app/views/list/css/song.css");

    // container
    this.#element = document.createElement("div");
    this.#element.classList.add("panel");

    // components
    for (const genre of genres) {
      this.#components.push(new GenreComponent(genre));

      for (const song of genre.songs)
        this.#components.push(new SongComponent(song));
    }
  }

  init() {
    for (const component of this.#components.values())
      this.#element.append(component.element);

    document.body.append(this.#element);
  }

  get components() {
    return this.#components;
  }

  getSongs() {
    return this.#components.filter(component => component instanceof SongComponent);
  }
}
