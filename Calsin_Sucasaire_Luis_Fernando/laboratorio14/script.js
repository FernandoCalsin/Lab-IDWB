//Ejercicio03
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
function ejecutar1() {
  let entrada = prompt("Ingrese precio del producto en decimal:");
  let numero = parseFloat(entrada);

  if (isNaN(numero)) {
    alert("Error: Por favor, ingrese un valor numérico válido.");
    return;
  }
  const resultado = new Redondeo(numero);
  document.getElementById("resultado").textContent = resultado.toString();
}
//Ejericicio4
function generarAleatorioEntero(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ejecutar2() {
  let entradaMin = prompt("Ingrese mínimo:");
  let entradaMax = prompt("Ingrese máximo:");
  let min = parseFloat(entradaMin);
  let max = parseFloat(entradaMax);

  if (isNaN(min) || isNaN(max)) {
    alert("Error: Ingrese valores numéricos válidos.");
    return;
  }
//Ejerciccio05
  let numeroAleatorio = generarAleatorioEntero(min, max);
  document.getElementById("resultado2").textContent = 
    `Número aleatorio generado: ${numeroAleatorio}`;
}
function ejecutar3(){
  let dado1=generarAleatorioEntero(0,6);
  let dado2=generarAleatorioEntero(0,6);
  document.getElementById("resultado3").textContent=
    `Dado 1 ${dado1}
    Dado 2 ${dado2}`;
}



