/**
 * MyButton component
 */
class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const styles = `
      button {
        border: none;
        padding: 1rem;
        border-radius: .5rem;
        color: #FFF;
        background: rgba(200, 0, 100, 1);
      }
      button:hover {
        background: rgba(230, 0, 100, 1);
      }
    `;

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <button><slot></slot></button>
    `;
  }
  static get observedAttributes() {
    return ["to", "name"];
  }
  attributeChangedCallback(name, prevValue, nextValue) {
    console.log(`${name}: ${prevValue} => ${nextValue}`);
  }
}

export default MyButton;
