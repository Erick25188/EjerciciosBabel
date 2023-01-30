import { LitElement, html } from 'lit-element';
import { ApiTemplate } from './components';
import { GetData } from './components';

class RickMortyApi extends LitElement {

    createRenderRoot() {
        return this;
      }

    static get properties() {
        return {
            wiki: { type: Array },
            page: { type: String }
        }
    }

    constructor() {
        super();
        this.wiki = [];
        this.addEventListener('ApiData', ({ detail }) => {
            // console.log(detail.data);
            this._dataFormat(detail.data)
        });
    }

    _dataFormat(data) {

        let characters = data.results.map(character => {
            return {
                img: character.image,
                name: character.name,
                species: character.species,
                status: character.status
            }
        });
        // console.log(characters);
        this.wiki = characters
    }

    get dataTemplate() {
        return html`
            ${this.wiki.map(character => html`             
                <div class="col">
                    <div class="card h-100">
                        <img src=${character.img} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <p class="card-text">${character.species} | ${character.status}</p>
                        </div>
                    </div>
                </div>
            `)}
        
        `;
    }

    render() {
        return html`
            <div class="container mt-5 text-center">
                <api-template></api-template>
                <get-data url="https://rickandmortyapi.com/api/character" method="GET" ></get-data>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    ${  this.dataTemplate }
                </div>
            </div>
            `;
    }

}

customElements.define('my-element', RickMortyApi);

