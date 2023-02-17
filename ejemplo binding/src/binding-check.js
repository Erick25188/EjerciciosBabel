import { LitElement, html } from 'lit-element';

class SiNo extends LitElement {
  static get properties() {
    return {
      activo: { type: Boolean }
    };
  }
  constructor() {
    super();
    this.activo = true;
  }
  render() {
    return html`
      <p>
        ${this.activo? 'Activo' : 'Inactivo'}
        <input type="checkbox" ?checked="${this.activo}" @change="${this.doChange}">
      </p>
    `;
  }
  doChange(e) {
    this.activo = e.target.checked;
  }
}

customElements.define('si-no', SiNo);