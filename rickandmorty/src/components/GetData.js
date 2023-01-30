import {LitElement} from 'lit-element';

export class GetData extends LitElement {

    static get properties(){
       return {
            url: { type: String },
            method: { type: String }
       }
    }

    firstUpdated() {
        this._getData();
    }

    constructor() {
        super();
    }

    _sendData( data ) {
        this.dispatchEvent( new CustomEvent('ApiData', {
            detail:{ data }, bubbles : true, composed: true
        }));
    }

    _getData() {
        fetch(this.url, { method: this.method})
            .then( response => {
                // console.log(response);
                if( response.ok ) return response.json();
                return Promise.reject(response);
            })
                .then( data => this._sendData(data))
                .catch( error => console.log(`Shomething went wrong: ${error}`));
    }

}

customElements.define('get-data', GetData);