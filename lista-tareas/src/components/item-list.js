import {LitElement, html, nothing} from 'lit-element';


export class ItemList extends LitElement {

    createRenderRoot(){
        return this
      }

    static get properties() {
        return {
            listaTareas: { type: Array},
            campoVacio : { type: Boolean  },
            hideCompleted: { type: Boolean}
        }
    }

    constructor() {
        super();
    }

    onchange( index ){
        this.listaTareas[index].completado = ! this.listaTareas[index].completado;
        localStorage.setItem("listaTareas", JSON.stringify(this.listaTareas));
        this.requestUpdate();
        console.log( index );
      }
  /******************* toma el indice del arreglo, el arreglo se divide en dos partes antes del indice y despues ********************/

  _eliminar(index) {
    this.dispatchEvent(
      new CustomEvent("task-removed", {
        detail: { index },
        bubbles: true,
        composed: true
      })
    );
  }
  
  render() {
    const tasks = this.listaTareas || [];
  
    return html`
      <ul class="list-group">
        ${tasks.map((tarea, index) => html`
          <li class="list-group-item d-flex align-items-center ${this.hideCompleted && tarea.completado ? 'd-none' : tarea.completado ? 'bg-gray' : 'd-block'}">
            <input class="form-check-input me-1" type="checkbox" ?checked=${tarea.completado} @change="${() => this.onchange(index)}">
            <label class="form-check-label ${tarea.completado ? 'text-decoration-line-through fw-bold' : nothing}">${tarea.tarea}</label>
            <button class="btn btn-danger ms-auto" @click=${() => this._eliminar(index)}>Eliminar</button>
          </li>
        `)}
      </ul>
    `;
  }

}

customElements.define('item-list', ItemList);