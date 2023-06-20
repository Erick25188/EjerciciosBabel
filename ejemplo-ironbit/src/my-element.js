import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
      arr: { type: Array },
      obj: { type:Object }
    }
  }

  constructor() {
    super()
    this.nombre = 'soy el pavis'
    this.docsHint = 'Inicial'
    this.count = 0
    this.arr = ['hola',' ', 'mundo']
    this.obj = {
      nombre: 'erick',
      edad: 29
    }
    this.arr2 = [1,2,3,4,5]
  }

  render() {
    return html`
     <div>
      <p>Contador: ${this.count}</p>
      <p>Estado interno: ${this.docsHint}</p>
      <button @click=${this._onClick} >Incrementar contador</button>
      <ul>
        ${this.arr.map( item => (html `
          <li>
            ${item}
          </li>
        `
        ))}
      </ul>
      <p>
        ${this.obj.nombre}
        ${this.obj.edad}
      </p>
      <p>${this.nombre}</p>
      <p> ${this.arr2} </p>
     </div>
    `
  }

  _onClick() {
    this.count++;
    this.docsHint = "Actualizado..."
    this.arr = [...this.arr,'nuevo']
    this.obj.nombre = 'pavis'
    this.arr2 = [...this.arr2, 1213]
    this.nombre = 'aklsjkldas'
    console.log(this.arr);
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
