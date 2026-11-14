export default class Tab {
  #element;
  
  constructor() {
    this.#element = document.createElement("button");
    this.#element.textContent = content;
  }

  get element() {
    return this.#element;
  }

  init() {
    
  }
}
