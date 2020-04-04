var mensaje = "hola a todos desde casa";
console.log(mensaje);
console.log("mensaje2");
var numero = 23; //Data type
var verdadero = true; //pow(2, 64)
var nulo; //keyword
var indefinido;
var numero2 = 22;
console.log(typeof (numero2));
var resultado = numero + numero2;
console.log(resultado);
var texto = document.getElementById("titulo1");
console.log("Objeto: " + typeof (texto));
texto.innerText = "hola";
var a = 123;
var b = ["saludos"];
b = 2;
let c = a + b;
console.log(c);
//funciones
var num1 = 1;
function letSuma() {
    if (num1 > 3) {
        var num2 = 3;
        return "mayor";
    }
    num1++;
    return num2;
}
console.log("resultado" + letSuma());
console.log("Numero1:" + num1);
const pi = 3.1416;
var num3 = 2;
var num3 = "4";
let frutas = ["manzana", "pera", "mango"];
let verduras = ["manzana", "pera", "sandia"];
let numeros = [1, 2, 3, "cinco", true, "seis"];
for (var indice in frutas) {
    console.log(frutas[indice]);
}
class SerHumano {
}
class Estudiante extends SerHumano {
    constructor(amaterno, aPaterno, nombreCompleto) {
        super();
        this.amaterno = amaterno;
        this.aPaterno = aPaterno;
        this.nombreCompleto = nombreCompleto;
        this.nombre = nombreCompleto + " " + amaterno + " " + aPaterno;
    }
}
class Profesor {
    constructor(amaterno, aPaterno) {
        this.amaterno = amaterno;
        this.aPaterno = aPaterno;
        this.clase = amaterno;
    }
}
function registro(persona) {
    return "se registra" + persona.amaterno + " " + persona.aPaterno;
}
var juan = new Estudiante("Ballesteros", "Velez", "Juan");
var pr1 = new Profesor("ap1", "am2");
console.log("Se registro" + registro(juan));
//console.log("se registro(prof)"+ registro(pr1));
