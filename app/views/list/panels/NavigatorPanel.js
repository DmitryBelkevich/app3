import CssLoader from '../../loaders/CssLoader.js';

export default class NavigatorPanel {
  #cssLoader = new CssLoader();
  #element;
  #components = new Map();
  
  constructor() {
    // this.#cssLoader.load("./app/views/list/css/nav.css");

    // container
    this.#element = document.createElement("nav");
    this.#element.classList.add("panel");

    // components
  }

  get components() {
    return this.#components;
  }

  init() {
    document.body.append(this.#element);
  }
}
