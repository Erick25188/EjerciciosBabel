import { LitElement, html } from 'lit-element';

class Resultado extends LitElement {
  static get properties() {
    return {
      resultado: { type: Number },
    };
  }
  constructor() {
    super();
    this.resultado = undefined;
  }

  render() {
    return html`
    <style>
      .success{
        background-color:green;
        color:white;
        padding:20px;
        margin:10px;
        border-radius: 5px;
        font-size: 1em;
      }

      .flex {
        display: flex;
        justify-content: center;
        width:50vw;
      }
      span{
        font-size: 1.6em;
        font-weight: 900;
      }
    </style>
      <div class="success flex">
        <p>El resultado es <span>${this.resultado}</span></p>
      </div>
    `;
  }
}

customElements.define('mostrar-resultado', Resultado);