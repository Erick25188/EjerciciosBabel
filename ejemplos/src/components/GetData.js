import { LitElement, html } from 'lit-element';


export class GetData extends LitElement {

    static get properties() {
        return {
            raza: { type: String },
            url: { type: Array },
            cod: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.url = [];
        this.cod = false;
        this.raza = '';

    }

    firstUpdated() {
        this.fetchRazas(this.raza);
    }

    updated(changedProperties) {
        if (changedProperties.has('raza')) {
            this.fetchRazas(this.raza);
        }
    }


    /******************* trae la imagen de los perros buscados ********************/

    async fetchRazas(perros) {
        let url = `https://dog.ceo/api/breed/${perros}/images/random/3`;
        const response = await fetch(url);
        const datos = await response.json();
        // console.log(datos.message.length);
        if (datos.code === 404 || datos.message.length === 0) {
            this.url = '';
            this.cod = true;
            console.log('error');
        } else {
            this.cod = false;
            this.url = datos.message;
            this._sendData(this.url, this.cod)
        }
    }


    _sendData(url, cod) {
        this.dispatchEvent(new CustomEvent('ApiData', {
            detail: {
                data: {
                    url,
                    cod
                }
            }, bubbles: true, composed: true
        }));
    }



}

customElements.define('get-data', GetData);