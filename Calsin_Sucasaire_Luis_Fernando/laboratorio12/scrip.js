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
//Ejericicio07
function promedioTres(){
    let suma=0;
    for(let i = 0;i<3;i++){
        let numero=parseInt(prompt(`Ingrese numero ${i+1}`));
        if(isNaN(numero)){
            alert("Numero no valido");
            i--;
            continue;
        }else{
            suma+=numero;
        }
    }
    let promedio= suma/3;
    alert(`El promedio es ${promedio}`);

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
//Ejercicio09
function calcularDescuento(){
    let precio = parseInt(prompt("Ingrese precio"));
    let porcentaje = parseInt(prompt("Ingrese en porcentaje el descuento"));
    let descuento = (precio*porcentaje)/100;
    alert(`El descuento es de ${descuento} \n y lo que deves pagar es: ${precio-descuento}`);
}
//Ejericicio10
const saludarUsuario =()=>{
    let nombreUsuario;
    while(!nombreUsuario){
        nombreUsuario = prompt("Ingrese nombre");
    }
    alert("Hola "+nombreUsuario);
}
//Ejercicio11
const esPositivo=()=>{
    let numero;
    while(isNaN(numero)){
        let inputUsuario=prompt("Ingrese numero");
        numero =parseInt(inputUsuario);
    }
    if(numero>0){
        alert(`Su numero ${numero} ingresado es positivo`);
    }else{
        alert(`Su numero ${numero} ingresado no es positivo`);
    }
}
//Ejercicio12
const aMayusculas = (texto) => texto.toUpperCase();
const agregarSigno = (texto) => `${texto}!`;

const componerTransformaciones = (f1, f2) => {
    return (texto) => f2(f1(texto));
};
const transformar = componerTransformaciones(aMayusculas, agregarSigno);
function pedirYTransformar() {
    let entrada = prompt("Ingresa el texto a transformar:");

    if (entrada) {
        let resultado = transformar(entrada);
        alert(resultado);
    } else {
        alert("No ingresaste nada.");
    }
}
//Ejericicio13
function procesarTexto(){
    const limpiarEspacio=(texto)=>texto.replace(/\s/g, '');
    const contarLetras=(textoSinEspacio)=>textoSinEspacio.length;
    let textoUsuario =prompt("Ingrese texto");
    if(textoUsuario){
        let textoSinEspacio =limpiarEspacio(textoUsuario);
        let textoCantidadLetras=contarLetras(textoSinEspacio);
        alert("El texto sin espacio es:"+textoSinEspacio+
            "\nCantidad de palabras: "+textoCantidadLetras);
    }else{
        alert("No ingresaste nada.");
    }
}

//Ejercicio14
const operacionesMatematicas=(numero1)=>{
    const suma=(numero2)=>numero1+numero2;
    const restar=(numero2)=>numero1-numero2;
    const multiplicacion=(numero2)=>numero1*numero2;
    const division=(numero2)=>{
        return numero2!=0 ? numero1/numero2 :"El divisor deve ser diferente de cero";
         };
    return{
        suma,
        restar,
        multiplicacion,
        division
    };
};
const ejecutarCalculadora=()=>{
    let numero1 =parseInt(prompt("Ingrese numero1"));
    if(isNaN(numero1)){
        alert("Valor no valido");
        return;
    }
    const ops=operacionesMatematicas(numero1);

    let numero2 =parseInt(prompt("Ingrese numero2"));
    if(isNaN(numero2)){
        alert("Valor no valido");
        return;
    }
    const mensajeResultados=`
    suma=${ops.suma(numero2)}
    resta=${ops.restar(numero2)}
    multiplicar=${ops.multiplicacion(numero2)}
    dividir=${ops.division(numero2)}
    `;
    alert(mensajeResultados);
};
//Ejercicio15

