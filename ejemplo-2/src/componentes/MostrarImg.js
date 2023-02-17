import { LitElement, html } from 'lit-element';


export class MostrarImg extends LitElement {

    createRenderRoot() {
        return this;
      }
  

    static get properties() {
        return {
            img: { type: Array}
        }
    }

    constructor() {
        super();
        this.img=[];
    }


    render() {
        return html`
        
            ${this.img.map(img => html`             
            <div class="col">
                <div class="card h-100">
                    <img src=${img} class="card-img-top" alt="...">
                </div>
            </div>
        `)}
       
        `;
    }

}

customElements.define('imagen-perro', MostrarImg);