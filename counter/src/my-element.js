import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    }
  }

  constructor() {
    super()
    this.count = 0
  }

  render() {
    return html`
      <div>
        <h1>contador: ${this.count}</h1>
      </div>
      <div class="card">
        <button @click=${this._addCount} >
          Click +
        </button>
        <button @click=${this._restCount} >
          Click -
        </button>
        <button @click=${this._resetCount} >
          reset
        </button>
      </div>
    `
  }

  _addCount() {
    this.count++
  }

  _restCount() {
    this.count--
  }

  _resetCount() {
    this.count = 0
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
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
}

window.customElements.define('my-element', MyElement)
