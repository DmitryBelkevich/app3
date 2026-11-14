import CssLoader from '../../loaders/CssLoader.js';

import Button from '../components/Button.js';

export default class TabsPanel {
  #cssLoader = new CssLoader();
  #element;
  #components = new Map();// tabs
  
  constructor() {
    this.#cssLoader.load("./app/views/song/css/tabs.css");
    
    // container
    this.#element = document.createElement("div");
    this.#element.id = "tabs";
    this.#element.classList.add("panel");

    this.#components.set("tab_text", new Button("📝 Text & Chords").id("tab_text").addClass("tab"));
    this.#components.set("tab_score", new Button("🎵 Scores").id("tab_score").addClass("tab"));
    this.#components.set("tab_playback", new Button("🎧 Playbacks").id("tab_playback").addClass("tab"));
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
