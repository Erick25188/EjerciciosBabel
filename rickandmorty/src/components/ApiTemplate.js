import {LitElement, html, css} from 'lit-element';
import style from '../styles/ApiTemplateStyle'


export class ApiTemplate extends LitElement {
  
    static get styles() {
        return [style]
        
    }

    constructor() {
        super();
    }


    render() {
        return html`
       
            <h1>The <strong class="title">Rick and Morty</strong>API</h1>
            <p class="title">LitElement</p>
        
        `;
    }

}

customElements.define('api-template', ApiTemplate);