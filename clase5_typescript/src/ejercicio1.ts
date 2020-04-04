var mensaje:string = "hola a todos desde casa"
console.log(mensaje)
console.log("mensaje2"); 
var numero: number = 23; //Data type
var verdadero: boolean = true; //pow(2, 64)
var nulo : null  //keyword
var indefinido: undefined;
var numero2: number = 22;
console.log(typeof(numero2));
var resultado = numero + numero2;
console.log(resultado);

var texto = document.getElementById("titulo1");
console.log("Objeto: "+ typeof(texto) );
texto.innerText = "hola";

var a : any = 123;
var b : any = ["saludos"];
b = 2;
let c : any = a+b;
console.log(c);

//funciones

var num1: number = 1;

function letSuma(){
    if(num1>3){
        var num2 = 3;
        return "mayor"
    }
    num1++;
    return num2;
}

console.log("resultado"+ letSuma());
console.log("Numero1:"+ num1);

const pi = 3.1416;


var num3: any = 2;
var num3: any = "4";

let frutas: string[]=["manzana", "pera", "mango"];
let verduras: Array<string>= ["manzana","pera", "sandia"];
let numeros =[1,2,3,"cinco",true,"seis"];

for (var indice in frutas){
    console.log(frutas[indice]);
}
class SerHumano{

}
class Estudiante extends SerHumano{
    nombre: string;
    constructor(public amaterno, public aPaterno, public nombreCompleto:string){
        super();
        this.nombre= nombreCompleto+" "+ amaterno+" "+aPaterno;
    }
}

class Profesor{
    clase: string; 
    
    constructor(private amaterno, public aPaterno){
        this.clase = amaterno;
       
    }
}
interface Persona{
    amaterno: string;
    aPaterno: string;
}

function registro (persona: Persona){
    return "se registra"+ persona.amaterno + " "+ persona.aPaterno;
}

var juan = new Estudiante("Ballesteros","Velez", "Juan");
var pr1 = new Profesor("ap1", "am2");
console.log("Se registro"+ registro(juan))
//console.log("se registro(prof)"+ registro(pr1));

