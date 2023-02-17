import { LitElement, html, css } from 'lit-element';

export class ComponentButton extends LitElement {
    static get styles() {
        return css`
        * {
        box-sizing: border-box;
      }
       div > input, button{
            display:block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
        }
        .error{
            color: red;
            border: 1px solid red;
            font-size: 20px;
            background-color: #FFF0F0	;
            font-weight: 900;
            padding: 25px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
        }
        `;
    }

    static get properties() {
        return {
            raza: { type: String },
            vacio: { type: Boolean}
        };
    }
    

    constructor() {
        super();
        this.raza='';
    }

    // connectedCallback() {
    //     super.connectedCallback();
    //     console.log('componente boton agregado');    
    // }

    mostrarError( msg ) {
        const banderaError = this.shadowRoot.querySelector('.error');

        if(!banderaError){
            const error = document.createElement('p');
            error.classList.add('error');
            error.innerText = `${msg}`;
            console.log(msg);
            const divBt = this.shadowRoot.querySelector('#alert');
            divBt.appendChild(error);
            setTimeout(() => {
                error.remove();
            }, 3000);
        }   
    }

    _buscar( ){
        this.raza = this.shadowRoot.getElementById('raza').value;
        if( this.raza === ''){
            this.vacio = true;
            this.mostrarError('Introduce algo en el input');
            this.dispatchEvent(new CustomEvent('hola', {
                detail: this.vacio,
                bubbles: true,
                composed: true
            }));
            return;
        }
        
        this.vacio = false;
        this.dispatchEvent(new CustomEvent('pasarRaza', { 
            detail: {
                raza: this.raza,
                vacio : this.vacio,
            },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
    <div id="cb">
        <div id="alert">
            <input id="raza" type="text">
            <button @click=${this._buscar}>BUSCAR</button>
        </div>
    </div>
        `;
    }
}
customElements.define('component-button', ComponentButton);
