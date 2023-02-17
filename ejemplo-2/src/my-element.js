import { LitElement, html, nothing, css } from 'lit-element';
import { MostrarImg } from './componentes';
import { fetchRazas } from './helpers';


class PerroApp extends LitElement {

    createRenderRoot() {
        return this;
      }

    static get properties() {
        return {
            raza: { type: String },
            img: { type: Array },
            campoVacio: { type: Boolean},
            sinDatosConsulta: { type: Boolean},
            disabledButton : { type: Boolean },
            banderaImg: { type: Boolean }
        }
    }
    static get styles() {
        return css`
          :root {
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
            color: red;
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


    constructor() {
        super();
        this.raza = ''
        this.img = [];
        this.campoVacio = false;
        this.sinDatosConsulta = false;
        this.disabledButton = false;
        this.banderaImg = false
    }

    async _onSubmit(e) {
        e.preventDefault();

        const inputPerro = this.renderRoot.querySelector('input[name="perro"]').value;
        const boton = this.renderRoot.querySelector("#button");

        if (!inputPerro) {
            console.log("Esta vacio el input");
            this.campoVacio = true;
            this.disabledButton = true;
            this.banderaImg = false
            boton.setAttribute("disabled", "");
            setTimeout(() => {
                this.campoVacio = false;
                this.disabledButton = false;
                boton.removeAttribute("disabled");
            }, 3000);
            return;
        }

        this.raza = inputPerro;
        const datos = await fetchRazas(this.raza);

        if( datos.message.length === 0){ 
            this.sinDatosConsulta = true;
            this.banderaImg = true;
            setTimeout(() => {
                this.banderaImg = false
            }, 3000);
            console.log(this.sinDatosConsulta);
            return
        };

        this.sinDatosConsulta = false;
        this.banderaImg = true;
        const { message } = datos;
        this.img = message;

    }

    render() {
        return html`
            <div class="container mt-5 ">
                <h1 class="text-center fondo-titulo"> BUSCADOR DE PERROS </h1>
                <br>
                <form 
                    @submit=${this._onSubmit}
                    class="row d-flex flex-column justify-content-center align-items-center"
                    >
                    <div class="col-sm-12 col-md-12 ">
                        <input 
                            type="text"
                            name="perro"
                            id="inputPerro"
                            class="form-control mb-3"
                            placeholder="Ingresa la raza del perro"
                         />
                    </div>
                    <div class="col-md-12">
                        <button  
                            id="button"
                            class="btn btn-primary "
                            type="submit"
                        >Buscar</button>
                    </div>  
                </form>
                ${
                    this.campoVacio 
                        ? html`<h1>El campo esta vacio</h1>`
                        : nothing
                }

                ${
                    !this.banderaImg 
                    ? nothing
                    : !this.sinDatosConsulta
                        ? html`<imagen-perro .img=${this.img} class="row row-cols-1 row-cols-md-3 g-4 mt-5 fondo-rosa p-5 m-2 rounded"></imagen-perro>`
                        : html`<h1>No existe en la busqueda</h1>`
                   
                    
                }
                    
            </div>
                
        `;
    }

}

customElements.define('perro-app', PerroApp);
