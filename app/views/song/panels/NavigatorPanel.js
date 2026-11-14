import CssLoader from '../../loaders/CssLoader.js';

import Button from '../components/Button.js';

export default class NavigatorPanel {
  #cssLoader = new CssLoader();
  #element;
  #components = new Map();
  
  constructor() {
    this.#cssLoader.load("./app/views/song/css/nav.css");
    
    // container
    this.#element = document.createElement("nav");
    this.#element.classList.add("panel");
    
    this.#components.set("list_button", new Button("◀️"));
    this.#components.set("autoscroll_button", new Button("⏬").id("autoscroll"));
  }

  init() {
    for (const component of this.#components.values())
      this.#element.append(component.element);
    
    document.body.append(this.#element);
  }

  get components() {
    return this.#components;
  }
}
