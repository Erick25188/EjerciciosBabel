class Persona{
    constructor(nombre, edad, genero){
        this.edad = edad;
        this.nombre = nombre;
        this.genero = genero;
    }
    mostrarDatos(){
        console.log(`nombre: ${this.nombre} Edad: ${this.edad} Genero: ${this.genero}`);
    }
}

class Estudiante extends Persona{
    constructor(nombre, edad, genero,carrera){
        super(nombre, edad, genero);
        this.carrera = carrera;
    }
    mostrarDatos(){
        console.log(`nombre: ${this.nombre} Edad: ${this.edad} Genero: ${this.genero} Carrera: ${this.carrera}`);
    }
}

const estudiante = new Estudiante('Juan',22,'Masculino','Sistemas')