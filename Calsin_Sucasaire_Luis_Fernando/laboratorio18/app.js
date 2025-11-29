import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";
console.log("APP CARGADO");
function getNumeros() {
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;

    if (a === "" || b === "") {
        throw new Error("Por favor ingresa ambos números.");
    }

    return { a: Number(a), b: Number(b) };
}
document.getElementById("btnSumar").addEventListener("click", () => {
    try {
        const { a, b } = getNumeros();
        document.getElementById("resultado").textContent = "Resultado: " + sumar(a, b);
    } catch (error) {
        document.getElementById("resultado").textContent = error.message;
    }
});
document.getElementById("btnRestar").addEventListener("click", () => {
    try {
        const { a, b } = getNumeros();
        document.getElementById("resultado").textContent = "Resultado: " + restar(a, b);
    } catch (error) {
        document.getElementById("resultado").textContent = error.message;
    }
});
document.getElementById("btnMultiplicar").addEventListener("click", () => {
    try {
        const { a, b } = getNumeros();
        document.getElementById("resultado").textContent = "Resultado: " + multiplicar(a, b);
    } catch (error) {
        document.getElementById("resultado").textContent = error.message;
    }
});
document.getElementById("btnDividir").addEventListener("click", () => {
    try {
        const { a, b } = getNumeros();
        const r = dividir(a, b);
        document.getElementById("resultado").textContent = "Resultado: " + r;
    } catch (error) {
        document.getElementById("resultado").textContent = "Error en división: " + error.message;
    }
});
