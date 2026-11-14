export default class GenreComponent {
  #element;
  
  constructor(genre) {
    this.#element = document.createElement("div");
    this.#element.classList.add("genre");
    this.#element.textContent = genre.title;
  }

  get element() {
    return this.#element;
  }

  init() {
    
  }
}
