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
function crearContador(valorInicial){
    let contador=valorInicial;
    function incrementar(){
        contador++;
        return contador;
    };
    function resetear(){
        contador=valorInicial;
        return contador;
    };
    return{
        incrementar:incrementar,
        resetear:resetear
    };
} 
const miControlador=crearContador(0);
const resultadoDiv =document.getElementById("resultadoContador");
const botonIncrementar=document.getElementById("botonIncrementar");
const botonReseteo=document.getElementById("botonReseteo");
function actualizarDisplay(nuevoValor){
    resultadoDiv.textContent=nuevoValor;
}
botonIncrementar.addEventListener("click",()=>{
    const nuevoValor=miControlador.incrementar();
    actualizarDisplay(nuevoValor);
})
botonReseteo.addEventListener("click",()=>{
    const nuevoValor=miControlador.resetear();
    actualizarDisplay(nuevoValor);
})
//Ejercicio16
function acumulador(valorInicial) {
  let total = valorInicial;
  return function (nuevoValor) {
    total += nuevoValor;
    return total;
  };
}
const miAcumulador = acumulador(0);
const resultado = document.getElementById("resultadoAcumulador");
const boton = document.getElementById("sumarValorNuevo");
boton.addEventListener("click", function() {
  const valor = parseFloat(prompt("Ingresa un número para sumar:"));
  if (!isNaN(valor)) {
    const nuevoTotal = miAcumulador(valor);
    resultado.textContent = nuevoTotal;
  } else {
    alert("Por favor, ingresa un número válido.");
  }
});
//Ejericicio17
function saludo(nombre = "Amigo") {
  return `¡Hola, ${nombre}! Bienvenido.`;
}
const botonSaludo = document.getElementById("saludo");
const mensaje = document.getElementById("mensajeSaludo");

botonSaludo.addEventListener("click", function() {
  const nombreUsuario = prompt("¿Cómo te llamas?");
  const textoSaludo = saludo(nombreUsuario || undefined);
  mensaje.textContent = textoSaludo;
});
//Ejercicio18
function media(...numeros) {
  if (numeros.length === 0) return 0;
  const suma = numeros.reduce((acum, num) => acum + num, 0);
  return suma / numeros.length;
}
const botonMedia = document.getElementById("calcularMedia");
const resultado18 = document.getElementById("resultadoMedia");
botonMedia.addEventListener("click", function() {
  const entrada = prompt("Ingresa varios números separados por comas (ejemplo: 10,20,30):");
  
  if (entrada) {
    const numeros = entrada.split(",").map(num => parseFloat(num.trim()));
    if (numeros.some(isNaN)) {
      alert("Por favor, ingresa solo números válidos.");
      return;
    }
    const resultadoMedia = media(...numeros);
    resultado18.textContent = `La media es: ${resultadoMedia}`;
  } else {
    alert("No ingresaste ningún valor.");
  }
});
//Ejerciciio19
function mostrarDatos(nombre, edad, ...hobbies) {
  let mensaje = `Nombre: ${nombre}\nEdad: ${edad}\nHobbies: ${hobbies.join(", ")}`;
  return mensaje;
}
const boton1 = document.getElementById("mostrar");
const resultado1 = document.getElementById("resultado19");
boton1.addEventListener("click", function() {
  const nombre = prompt("Ingresa tu nombre:");
  const edad = prompt("Ingresa tu edad:");
  const hobbiesEntrada = prompt("Ingresa tus hobbies separados por comas (ejemplo: música, fútbol, leer):");  
  const hobbies = hobbiesEntrada ? hobbiesEntrada.split(",").map(h => h.trim()) : [];  
  const mensaje = mostrarDatos(nombre, edad, ...hobbies);
  resultado1.textContent = mensaje.replaceAll("\n", " ");
});
//Ejerciciio20
// Funciones aritméticas
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b !== 0 ? a / b : "Error: división entre 0"; }

// Función que recibe otra función como parámetro
function ejecutarOperacion(fn, x, y) {
  return fn(x, y);
}

// Conectamos con el HTML
const boton20 = document.getElementById("operacion");
const resultado20 = document.getElementById("resultado20");

// Evento al hacer clic
boton20.addEventListener("click", function() {
  const x = parseFloat(prompt("Ingresa el primer número:"));
  const y = parseFloat(prompt("Ingresa el segundo número:"));
  const tipo = prompt("¿Qué operación quieres realizar? (sumar, restar, multiplicar, dividir):").toLowerCase();
  let operacion;
  switch (tipo) {
    case "sumar": operacion = sumar; break;
    case "restar": operacion = restar; break;
    case "multiplicar": operacion = multiplicar; break;
    case "dividir": operacion = dividir; break;
    default:
      alert("Operación no válida");
      return;
  }
  const resultado = ejecutarOperacion(operacion, x, y);
  resultado20.textContent = `Resultado: ${resultado}`;
});
//Ejercicicio21
function filtrarArreglo(arr, callback) {
  const resultado = [];
  for (let elemento of arr) {
    if (callback(elemento)) {
      resultado.push(elemento);
    }
  }
  return resultado;
}

function esPar(num) {
  return num % 2 === 0;
}

function esMayorQueCinco(num) {
  return num > 5;
}

const boton21 = document.getElementById("filtrar");
const resultado21 = document.getElementById("resultado21");
boton21.addEventListener("click", function() {
  const entrada = prompt("Ingresa números separados por comas (ejemplo: 1,2,3,6,8):");
  const numeros = entrada.split(",").map(n => parseFloat(n.trim()));
  const tipo = prompt("Filtrar por: 'pares' o 'mayores que cinco'").toLowerCase();
  let resultado;
  if (tipo === "pares") {
    resultado = filtrarArreglo(numeros, esPar);
  } else if (tipo === "mayores que cinco") {
    resultado = filtrarArreglo(numeros, esMayorQueCinco);
  } else {
    alert("Opción no válida.");
    return;
  }
  resultado21.textContent = `Resultado: [${resultado.join(", ")}]`;
});
//Ejerciciio22
function descargarArchivo(url, callback) {
  const resultado22 = document.getElementById("resultado22");
  resultado22.textContent = "Descargando...";  
  setTimeout(() => {
    callback(url);
  }, 2000);
}
function mostrarDescarga(url) {
  const resultado22 = document.getElementById("resultado22");
  resultado22.textContent = `Descarga completa de ${url}`;
}
const boton22 = document.getElementById("descargar");
boton22.addEventListener("click", function() {
  const url = prompt("Ingresa la URL del archivo a descargar:");
  if (url) {
    descargarArchivo(url, mostrarDescarga);
  } else {
    alert("Por favor, ingresa una URL válida.");
  }
});
//Ejercicio23
function potencia(base, exponente) {
  if (exponente === 0) return 1;
  if (exponente < 0) return 1 / potencia(base, -exponente);
  return base * potencia(base, exponente - 1);
}

const boton23 = document.getElementById("calcularPotencia");
const resultado23 = document.getElementById("resultado23");
boton23.addEventListener("click", function() {
  const base = parseFloat(prompt("Ingresa la base:"));
  const exponente = parseInt(prompt("Ingresa el exponente (puede ser negativo):"));  
  if (isNaN(base) || isNaN(exponente)) {
    alert("Por favor ingresa valores numéricos válidos.");
    return;
  }
  const resultado = potencia(base, exponente);
  resultado23.textContent = `${base} elevado a ${exponente} = ${resultado}`;
});










