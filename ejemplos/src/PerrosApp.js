import { LitElement, html, css } from 'lit-element';
import './components';

export class PerrosApp extends LitElement {
  
    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
               raza: { type: String },
               url: { type: Array },
               cod: { type: Boolean },
               vacio: { type: Boolean }
        };
    }

    constructor() {
        super(); 
        this.url=[];
        this.cod = false;
        this.vacio = true;
        this.raza = '';
    }

    // connectedCallback() {
    //     super.connectedCallback();
    //     console.log('Elemento conectado --> PADRE');
    // }

  
    _obtenerRaza( e ) {
        this.raza = e.detail.raza;
        this.vacio = e.detail.vacio;
    }


    _verificarInput( e ){
        this.vacio = e.detail; 
    }

    _obtenerImg( e ){
        console.log(e.detail.data.url);
        this.url = e.detail.data.url;
        this.cod = e.detail.data.cod;
    }

    _mostrarImagen() {
        if( this.cod === false && this.vacio === false ){
            return html ` <mostrar-img .url=${this.url} .cod=${this.cod}></mostrar-img>`;
        } else if( this.url.length === 0){
            return  html`<p>No hay imagenes que mostrar </p>`;
        }
    }

    render(){
       return html` 
       
       ${ this.raza === '' 
            ? html`` 
            : html`<get-data .raza=${this.raza} @ApiData=${ this._obtenerImg }></get-data>`
        }

        <h1>Escribe la Raza Del Perro.</h1>

        <component-button @pasarRaza=${ this._obtenerRaza} @hola=${this._verificarInput}></component-button>
        
        ${this._mostrarImagen()}
        `;
    }
}
customElements.define('perros-app', PerrosApp);


// render() {
//     return html`
//         <div>
//             <h1>Escribe la Raza Del Perro.</h1>
//             <input id="raza" type="text"  >
//             <button @click=${this._obtenerRaza}>Buscar</button>
//             <img src="${this.url}">
//         </div>
//     `;
// }