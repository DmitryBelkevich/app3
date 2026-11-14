import CssLoader from '../../loaders/CssLoader.js';

export default class TextPanel {
  #cssLoader = new CssLoader();
  #element;
  
  constructor() {
    // container
    this.#element = document.createElement("div");
    this.#element.id = "text";
    this.#element.classList.add("panel");

    // components
    for (let i = 0; i < 100; i++) {
      const div = document.createElement("div");
      const spaces = (i) => {
        return " ";
      };
      div.textContent = i + spaces + "text content";
      this.#element.append(div);
    }
  }

  init() {
    document.body.append(this.#element);
  }
}
