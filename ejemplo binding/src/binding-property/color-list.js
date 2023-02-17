import { LitElement, html } from 'lit-element';
import './list-element.js';

class ColorList extends LitElement {
  static get properties() {
    return {
      colors: { type: Array }
    };
  }
  constructor() {
    super();
    this.colors = ['Rojo', 'Verde', 'Amarillo', 'Azul'];
  }
  render() {
    return html`
      <list-element .items="${this.colors}"></list-element>
    `;
  }
}

customElements.define('color-list', ColorList);