import { html, render } from "lit-html";
import "./styles.css";
import "./components/hello";
import MyButton from "./components/button";

const registerCustomElement = (name, componentClass) => {
  if (!customElements.get(name)) {
    customElements.define(name, componentClass);
  }
};
registerCustomElement("my-button", MyButton);

// document.getElementById("app").innerHTML = `
// <my-button>Hello My button!</my-button>
// `;

render(
  html`
    <my-button>Hello My button!</my-button>
    <say-hello to="web component" />
  `,
  document.getElementById("app")
);
