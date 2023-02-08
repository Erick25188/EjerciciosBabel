import {LitElement, html, nothing, css} from 'lit-element';

class ListaTareas extends LitElement {

  createRenderRoot(){
    return this
  }

  static get properties() {
    return {
        listaTareas: { type: Array },
        campoVacio : { type: Boolean  },
        hideCompleted: { type: Boolean}
    }
  }

  static get styles() {
    return css`
    #root
    .bg-gray{
      background-color: red;
      color:red
    }
    `
  }

  constructor() {
    super();
    this.listaTareas = JSON.parse(localStorage.getItem("listaTareas" )) || [];
    this.campoVacio = false;
    this.hideCompleted = false;
  }

  _validarInput( valor ){
      if( valor === '' ){
        console.log('esta vacio');
        this.campoVacio = true
        return;
      }
      this.campoVacio = false;
      this.listaTareas = [ ...this.listaTareas, { tarea: valor, completado: false } ];
      localStorage.setItem("listaTareas", JSON.stringify(this.listaTareas));
      console.log(this.listaTareas);
}

  _submit( e ){
    e.preventDefault();
    const valorInput = this.renderRoot.querySelector("#inputTarea").value;
    this._validarInput( valorInput )
  }

  /******************* toma el indice del arreglo, el arreglo se divide en dos partes antes del indice y despues ********************/
  _eliminar( index ) {
    // this.listaTareas = [...this.listaTareas.slice(0, index), ...this.listaTareas.slice(index + 1)];
  this.listaTareas = this.listaTareas.filter( (_,i) => i !== index );
  localStorage.setItem("listaTareas", JSON.stringify(this.listaTareas));
  }

  get textoValidar(){
    return html`
      ${
          this.campoVacio 
          ? html`<h1>coloca datos en la entrada</h1>`
          : nothing
      }
    `;
  }
  
  onchange( index ){
    this.listaTareas[index].completado = ! this.listaTareas[index].completado;
    localStorage.setItem("listaTareas", JSON.stringify(this.listaTareas));
    this.requestUpdate();
    console.log( index );
  }



  setHideCompleted( e ) {
    this.hideCompleted = e.target.checked;
    console.log( this.hideCompleted );
    this.requestUpdate();
  }
  

  render() {

    return html`
  <div class="bg-primary text-white">
    <div class="container-md pt-5 pb-5">
      <h1 class="h1">Lista de tareas.</h1>
      <form @submit=${this._submit}>
        <input
          class="form-control mb-3"
          id="inputTarea"
          type="text"
          name="tarea"
          placeholder="agrega una tarea"
        >
        <button style="background-color: var(--bs-primary-bg-subtle);--bs-border-color:var(--bs-primary-border-subtle);color: var(--bs-primary-text);" class="btn  btn-lg" type="submit">Agregar</button>
          <div class="float-end" >
          <label><strong>Ocultar tareas realizadas</strong></label>
          <input type="checkbox"  @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}>
        </div>
      </form>
    </div>

      ${ this.textoValidar }
      <hr class="border border-3 opacity-75" style="background-color: var(--bs-primary-bg-subtle);">
  </div>
  <div class="container mb-5">
      <div class="row justify-content-center mt-5 " >
        <div class="col-md-8 ">
            <ul class="list-group ">
            ${
              this.listaTareas.map( (tarea,index) => html`
                <li
                  class="list-group-item d-flex align-items-center ${this.hideCompleted && tarea.completado ? 'd-none' : tarea.completado ? 'bg-gray' : 'd-block'}
                                                                    ">
                    <input class="form-check-input me-1" type="checkbox" ?checked=${tarea.completado} @change="${()=>this.onchange(index)}"> 
                    <label
                      class="form-check-label" 
                      for="firstCheckbox"
                      class="${tarea.completado ? 'text-decoration-line-through fw-bold ' : nothing}"
                      > ${tarea.tarea}</label>
                    <button class="btn btn-danger ms-auto" @click=${() => this._eliminar(index)}>Eliminar</button> 
                </li>
              `)
            }
          </ul>
        </div>
      </div>
    </div>
      `;
  }

}

customElements.define('lista-tareas', ListaTareas);