import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

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
    }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  render() {
    return html`
    <div class="container">
      <h1>Título del componente</h1>
      <div class="content">
        <slot name="contenido"></slot>
      </div>
      <div class="footer">
        <slot name="pie-de-pagina"></slot>
      </div>
    </div>
    <p>nuevas cosasa<p>
    `
  }    

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
    .container {
      border: 1px solid #ccc;
      padding: 16px;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }

    .content {
      margin-bottom: 16px;
    }

    .footer {
      font-style: italic;
      color: #888;
    }
    `
  }
}

window.customElements.define('my-element', MyElement)
