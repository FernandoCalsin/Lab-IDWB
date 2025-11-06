// Ejercicio03 - Clase Redondeo
class Redondeo {
  constructor(valor) {
    this.numero = valor;
  }
  redondeoAbajo() {
    return Math.floor(this.numero);
  }
  redondeoArriba() {
    return Math.ceil(this.numero);
  }
  redondeoNormal() {
    return Math.round(this.numero);
  }
  toString() {
    return `Redondeo hacia abajo: ${this.redondeoAbajo()}
    Redondeo hacia arriba: ${this.redondeoArriba()}
    Redondeo normal: ${this.redondeoNormal()}`;
  }
}
function ejecutar3() {
  let entrada = prompt("Ingrese precio del producto en decimal:");
  let numero = parseFloat(entrada);

  if (isNaN(numero)) {
    alert("Error: Por favor, ingrese un valor numérico válido.");
    return;
  }
  const resultado = new Redondeo(numero);
  document.getElementById("resultado3").textContent = resultado.toString();
}
// Ejercicio04 - Aleatorio entre min y max
function generarAleatorioEntero(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ejecutar4() {
  let entradaMin = prompt("Ingrese mínimo:");
  let entradaMax = prompt("Ingrese máximo:");
  let min = parseFloat(entradaMin);
  let max = parseFloat(entradaMax);

  if (isNaN(min) || isNaN(max)) {
    alert("Error: Ingrese valores numéricos válidos.");
    return;
  }
  let numeroAleatorio = generarAleatorioEntero(min, max);
  document.getElementById("resultado4").textContent =
    `Número aleatorio generado: ${numeroAleatorio}`;
}
// Ejercicio05
function ejecutar5() {
  let dado1 = generarAleatorioEntero(1, 6);
  let dado2 = generarAleatorioEntero(1, 6);
  document.getElementById("resultado5").textContent =
    `Dado 1: ${dado1}
    Dado 2: ${dado2}`;
}
// Ejercicio06
function ejecutar6() {
  let numeroUsuario = prompt("Ingrese número al que se le sacará raíz y potencia:");
  let numero = parseFloat(numeroUsuario);
  if (isNaN(numero)) {
    alert("Error: Ingrese un valor numérico válido.");
    return;
  }
  let cuadrado = Math.pow(numero, 2);
  let cubo = Math.pow(numero, 3);
  let raiz = Math.sqrt(numero);
  document.getElementById("resultado6").textContent =
    `El cuadrado de ${numero} es ${cuadrado}
    El cubo de ${numero} es ${cubo}
    La raíz de ${numero} es ${raiz}`;
}
// Ejercicio07
const PI = 3.1416;
function ejecutar7(){
  let usuario = prompt("Ingrese valor: 45G (grados) o 1R (radianes)");
  let numero = parseFloat(usuario.slice(0, -1));
  let simbolo = usuario.charAt(usuario.length - 1);
  switch (simbolo.toUpperCase()) {
    case 'G':
      document.getElementById("resultado7").textContent = `
      El grado ${numero} transformado a radianes es ${gradosARadianes(numero)}`;
      break;
    case 'R':
      document.getElementById("resultado7").textContent = `
      El radian ${numero} transformado a grados es ${radianesAGrados(numero)}`;
      break;
    default:
      document.getElementById("resultado7").textContent = `
      Dato ingresado no válido. Ingrese solo grados (G) o radianes (R).`;
  }
}
function gradosARadianes(grados) {
  return grados * (PI / 180);
}
function radianesAGrados(radianes) {
  return radianes * (180 / PI);
}
// Ejercicio08
function ejecutar8() {
  let contraseña = "";
  for (let i = 0; i < 6; i++) {
    let aleatorio = Math.floor(Math.random() * 10);
    contraseña += aleatorio;
  }
  document.getElementById("resultado8").textContent =
    `Contraseña generada: ${contraseña}`;
}
// Ejercicio09
function ejecutar9() {
  let x1U=prompt("Ingrese x1:");
  let y1U=prompt("Ingrese y1:");
  let x2U=prompt("Ingrese x2:");
  let y2U=prompt("Ingrese y2:");
  let x1=parseInt(x1U);
  let y1=parseInt(y1U);
  let x2=parseInt(x2U);
  let y2=parseInt(y2U);
  if(x1isNaN||x2isNaN||y1isNaN||y2isNaN){
    alert("Ingresar numeros");
    return;
  }
  let distanciaPuntos=Math.sqrt(Math.pow(Math.abs(x2-x1),2)+Math.pow(Math.abs(y2-y1),2));
  let distanciaOrigin1=Math.sqrt(Math.pow(Math.abs(x1)));
  let distanciaOrigin2

  document.getElementById("resultado9").textContent = "Ejercicio 09 aún no implementado.";
}
