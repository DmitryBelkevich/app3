import View from '../View.js';

import NavigatorPanel from './panels/NavigatorPanel.js';
import ListPanel from './panels/ListPanel.js';

export default class ListView extends View {
  #panels = new Map();
  
  constructor(genres) {
    super();

    this._cssLoader.load("./app/views/list/css/genre.css");
    this._cssLoader.load("./app/views/list/css/song.css");

    this.setPageTitle("Track-list");

    this.#panels.set("navigator", new NavigatorPanel());
    this.#panels.set("list", new ListPanel(genres));
  }

  init() {
    for (const panel of this.#panels)
      panel.init();
  }

  get panels() {
    return this.#panels;
  }
}
