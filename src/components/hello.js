import { LitElement, html, css } from "lit-element";

/**
 * Hello component
 */
class Hello extends LitElement {
  static get properties() {
    return { to: { type: String } };
  }
  static get styles() {
    return css`
      p {
        font-family: Roboto;
        font-size: 1.5rem;
        font-weight: 500;
      }
      .red {
        color: red;
      }
      .blue {
        color: blue;
      }
    `;
  }

  constructor() {
    super();
    this.to = "World";
  }

  render() {
    return html`
      <p class="red">Hello, ${this.to}!</p>
      <button @click="${this.clickHandler}">Click</button>
    `;
  }
  clickHandler(event) {
    console.log(event.target);
    this.to = `${this.to}!`;
  }
}

export default Hello;
