import { LitElement, html, css } from 'lit-element';

export class Images extends LitElement {
    static get styles() {
        return css`
        img {
            border-radius: 8px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
        }
        `;
    }

    static get properties() {
        return {
            url: { type: Array },
            cod: { type: Boolean }
        };
    }
    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
     constructor() {
        super(); 
        this.cod = false;   
        this.url = [];
    }

    disconnectedCallback() {
        console.log('Elemento hijo desconectado');
        this.url = [];
        this.cod = false
    }

    render() {
        return html`
        <ul>
        ${this.url.map(item => html`
          <li>${item}</li>
        `)}
      </ul>
        `;
    }
   
}
customElements.define('mostrar-img', Images);