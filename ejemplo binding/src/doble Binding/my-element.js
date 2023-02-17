import { LitElement, html } from 'lit-element';
import './my-text-input';

class MyElement extends LitElement {
  static get properties() {
    return {
      miDato: { type: String }
    };
  }
  constructor() {
    super();
    this.miDato = 'Valor de inicialización';
  }
  render() {
    return html`
      <p>Soy My Element</p>
      <my-text-input .value=${this.miDato} @change="${this.inputCambiado}"></my-text-input>
      <p>El dato escrito es ${this.miDato}</p>
      <button @click=${this.resetTexto}>Borrar texto</button>
    `;
  }

  inputCambiado(e) {
    this.miDato = e.detail;
  }

  resetTexto() {
    this.miDato = '';
  }
}

customElements.define('my-element', MyElement);