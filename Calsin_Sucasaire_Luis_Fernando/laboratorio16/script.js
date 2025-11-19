function ejecutar03() {
    const texto = document.querySelectorAll("p");
    texto.forEach(p => {
        p.textContent = "Texto cambiado";
    });
}
let cambiado= false;
function ejecutar04(){
    const p=document.getElementById("texto-cambiar");
    if(cambiado){
        p.textContent = "Texto original";
    }else{
        p.textContent = "Texto cambiado";
    }
    cambiado=!cambiado;
}
let cambiar=false;
function ejecutar05(){
    if(cambiar){
        document.body.classList.remove("oscuro");
    }else{
        document.body.classList.add("oscuro");
    }
    cambiar=!cambiar;
}


let valor = 0;
function sumar() {
    valor++;
    actualizar();
}
function restar() {
    if (valor > 0) {
        valor--;
        actualizar();
    } else {
        mostrarMensaje("No puedes bajar de 0");
    }
}
function actualizar() {
    document.getElementById("contador").textContent = valor;
    mostrarMensaje(""); // limpiar mensaje
}
function mostrarMensaje(texto) {
    document.getElementById("mensaje").textContent = texto;
}