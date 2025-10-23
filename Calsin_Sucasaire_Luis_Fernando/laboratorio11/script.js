//. Calcular promedio con validación. Pide 5 notas y calcula el promedio,
//  asegurándote de que estén entre 0 y 20
const boton1 = document.getElementById("boton1");
boton1.addEventListener("click", funcionA);
function funcionA() {    
    let notas = [];
    let suma = 0;

    for (let i = 0; i < 5; i++) {        
        let notaIngresada = parseFloat(prompt(`Ingrese nota ${i + 1}`));
        if (isNaN(notaIngresada) || notaIngresada < 0 || notaIngresada > 20) {
            alert("Error: Ingrese solo números entre 0 y 20.");
            i--;
        } else {
            suma += notaIngresada;
            notas.push(notaIngresada);
        }
    }
    let promedio = suma / 5;
    alert(`El promedio es ${promedio.toFixed(2)}`);
    console.log(`El promedio es: ${promedio.toFixed(2)}`);
}
//ejericcio04
const boton2 = document.getElementById("boton2");
boton2.addEventListener("click", funcionB);

function funcionB() {
    let edad = parseFloat(prompt("Ingrese edad"));    
    if (isNaN(edad) || edad < 0) {
        alert("Error: ingrese una edad válida (número mayor o igual a 0).");
        return;
    }
    if (edad < 12) {
        alert("Niño");
    } else if (edad <= 17) {
        alert("Adolescente");
    } else if (edad <= 59) {
        alert("Adulto");
    } else {
        alert("Adulto mayor");
    }
}
//ejericicio05
const boton3 = document.getElementById("boton3");
boton3.addEventListener("click",funcionC);
function funcionC(){
    let contadorPar=0;
    let contadorInpar=0;
    for(let i=0; i<10;i++){
        let numeroIngresado= parseFloat(prompt(`Ingrese numero ${i + 1} :`));
        if(isNaN(numeroIngresado)){
            alert("Ingresar solo numeros");
            return;            
        }
        numeros.push(numeroIngresado);
        if(numeroIngresado%2==0){
            contadorPar++;
        }else{
            contadorInpar++;
        }
    }
    alert(`La cantidad de pares son ${contadorPar} y La cantidad de inpares son ${contadorInpar}`);

}
//ejercicio06
const boton4 = document.getElementById("boton4");
boton4.addEventListener("click",funcionD);
function funcionD(){
    let numero;
    if(isNaN(numero)){
        alert("Ingresar solo numeros");
        return;
    }
    for(let i=1;i<=12;i++){

    }
}
function concatenar(string a,let b){
    a=a+b;     
}