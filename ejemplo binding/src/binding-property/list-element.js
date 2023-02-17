import { LitElement, html } from 'lit-element';

class ListElement extends LitElement {
  static get properties() {
    return {
      items: { type: Array }    
    };
  }
  render() {
    return html`
      <ul>
        ${this.items.map(item => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}

customElements.define('list-element', ListElement);