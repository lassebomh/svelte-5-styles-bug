import Component from "./Component.svelte";
import { mount, unmount } from "svelte";

class MyWebComponent extends HTMLElement {
  component!: ReturnType<typeof Component>;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.component = mount(Component, {
      target: this.shadowRoot!,
    });
  }

  disconnectedCallback() {
    unmount(this.component);
  }
}

customElements.define("my-web-component", MyWebComponent);
