//Ejercicio03
const boton3 = document.getElementById("boton3");
boton3.addEventListener("click", preguntarSiEsPar);

function preguntarSiEsPar() {
  let inputUsuario = prompt("Ingresa un número:");
  let numero = parseInt(inputUsuario);
  if (isNaN(numero)) {
    alert("Error: Eso no es un número válido.");
    return;
  }
  let esPar = (numero % 2 == 0);
  alert(esPar);
}
//Ejercicio04
const boton4 = document.getElementById("boton4");
boton4.addEventListener("click",areaRectangulo);

function areaRectangulo(){
    let inputUsuario=prompt("Ingrese base");
    let base=parseInt(inputUsuario);
    inputUsuario=prompt("Ingrese altura");
    let altura=parseInt(inputUsuario);
    if(isNaN(altura) || isNaN(base)){
        alert("Numeros no validos");
        return;
    }
    alert("el area es: "+ (base*altura));
}
//Ejericico05
function esMultiplo() {
    let numeroUsuario = prompt("Ingrese numero a:");
    let numero = parseInt(numeroUsuario);
    numeroUsuario = prompt("Ingrese numero b ");
    let numeroB = parseInt(numeroUsuario);
    if (isNaN(numero) || isNaN(numeroB)) {
        alert("Número inválido");
        return;
    }
    if (numero % numeroB == 0) {
        alert("si es multiplo");
    } else {
        alert("no es multiplo");
    }
}
//Ejercicio06
function mayorDeTres(){
    let numero1=parseInt(prompt("Ingrese el primer numero"));
    let numero2=parseInt(prompt("Ingrese el numero dos"));
    let numero3=parseInt(prompt("Ingrese el numero tres"));
    let mayor=numero1;
    if(mayor<numero2){
        mayor=numero2;
    }
    if(mayor<numero3){
        mayor=numero3;
    }
    alert("el numero mayor es: "+mayor);
}
//Ejericicio08
function convertirAMayusculas(){
    let palabra = prompt("Escribe una palabra:");
    if (palabra) {
        let palabraMayusculas = palabra.toUpperCase();        
        alert("Tu palabra en mayúsculas es: " + palabraMayusculas);
    } else {
        alert("No ingresaste ninguna palabra.");
    }
}

