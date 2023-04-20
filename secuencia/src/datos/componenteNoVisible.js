import { LitElement, html } from 'lit-element';


export class ComponenteNoVisible extends LitElement {

    static get properties() {
        return {
            resultado: { type: Number },
            num: { type: Number },
        };
    }

    triangular() {
        let total;
        if (this.num > 0) {
            total = (this.num * (this.num + 1)) / 2;
            return total;
        } else {
            console.log('tiene que ser un numero mayor a cero;');
        }
    }

    fibonaci() {
        let ultimo = 0;
        let fibonacci = [];
        fibonacci[0] = 0;
        fibonacci[1] = 1;
        if (this.num < 2) {
            ultimo = this.num;
            return;
        } else {
            for (var i = 2; i < this.num; i++) {
                fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
            }
            ultimo = fibonacci[fibonacci.length - 1];
            return ultimo;
        }
    }

    primo() {
        let arreglo = [];
        let y = 0;

        const esPrimo = (numero) => {
            // Casos especiales
            if (numero == 0 || numero == 1 || numero == 4) return false;
            for (let x = 2; x < numero / 2; x++) {
                if (numero % x == 0) return false;
            }
            // Si no se pudo dividir por ninguno de los de arriba, sí es primo
            arreglo = [...arreglo, numero];
            return true;
        };

        while (arreglo.length < this.num) {
            esPrimo(y);
            y++;
        }

        return arreglo[arreglo.length - 1];
    }

    // _sendData( ){
    //     this.resultado =
    //     (3 * this.primo(this.num) * this.triangular(this.num)) /
    //     this.fibonaci(this.num - 2);
    //     console.log('jiiiiiii');

    // }

    secuencia() {
        this.resultado =
            (3 * this.primo(this.num) * this.triangular(this.num)) /
            this.fibonaci(this.num - 2);
           return this.resultado;
    }
}

customElements.define('get-datos', ComponenteNoVisible);