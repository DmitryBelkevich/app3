import View from '../View.js';

import NavigatorPanel from './panels/NavigatorPanel.js';
import ListPanel from './panels/ListPanel.js';

import GenreComponent from './components/GenreComponent.js';
import SongComponent from './components/SongComponent.js';

export default class ListView extends View {
  #panels = new Map();
  #components = [];
  
  constructor(genres) {
    super();

    this._cssLoader.load("./app/views/list/css/genre.css");
    this._cssLoader.load("./app/views/list/css/song.css");

    this.setPageTitle("Track-list");

    this.#panels.set("navigator", new NavigatorPanel());
    this.#panels.set("list", new ListPanel(genres));

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
