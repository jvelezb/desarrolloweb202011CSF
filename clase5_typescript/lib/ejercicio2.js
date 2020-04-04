//setTimeout(()=>console.log("Primero"),1000);
//setTimeout(()=>console.log("Segundo"),500);
//console.log("Tercero");
function callback() {
    console.log("Primer callback");
    setTimeout(callback2, 1000);
}
function callback2() {
    console.log("Segundo callback");
}
setTimeout(callback, 1000);
async function funcionAsincrona() {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("primera ejecucion en la promesa");
            if (false) {
                reject("error");
            }
            else {
                resolve("exito");
            }
        }, 1000);
    });
    let resultado = await promesa;
    console.log("resultado " + resultado);
    return resultado;
}
console.log(funcionAsincrona());
function ejecucion() {
    var entrada = +document.getElementById("entrada1").value;
    //alert("hola: "+ entrada);
    setTimeout(() => {
        document.getElementById("titulo1").style.color = "blue";
        document.getElementById("titulo1").innerText = "Ya termino la clase";
        document.getElementById("titulo1").style.fontSize = "50px";
        document.getElementById("titulo1").className = "claseNuevaCSS";
    }, entrada);
}
