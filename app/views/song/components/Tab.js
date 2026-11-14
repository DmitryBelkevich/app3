export default class Tab {
  #element;
  
  constructor(content) {
    this.#element = document.createElement("button");
    this.#element.textContent = content;
  }

  get element() {
    return this.#element;
  }

  id(id) {
    this.#element.id = id;
    return this;
  }

  addClass(clazz) {
    this.#element.classList.add(clazz);
    return this;
  }

  init() {
    
  }

  click(handler) {
    this.#element.addEventListener("click", () => {
      handler();
    });
  }
}
