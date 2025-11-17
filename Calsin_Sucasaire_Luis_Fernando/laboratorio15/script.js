function ejecutar03(){
    const primerH2 = document.querySelector('h2');
    console.log(primerH2.textContent);
}

function ejecutar04() {
    const parrafos = document.querySelectorAll("p");
    parrafos.forEach(p => {
        p.textContent = "Texto actualizado dinámicamente";
    });
}

function ejecutar05() {
    const primeraImagen = document.querySelector("img")

    primeraImagen.src = "nueva-imagen.jpg";
    primeraImagen.alt = "Descripción actualizada de la imagen";
}

function ejecutar06(){
    const elementos = document.querySelectorAll("li");

    elementos.forEach(li => {
        li.classList.add("resaltado");
        li.classList.remove("oculto");
    });
}

function ejecutar07() {
    const ul = document.getElementById("mi-lista");
    const hijos = ul.children;

    for (const li of hijos) {
        console.log(li.textContent);
    }
}

function ejecutar08() {
    const divs = document.querySelectorAll("div");
    const colores = ["red","blue","green","orange","purple","yellow"];
    let index=0;
    for (const div of divs) {
        div.style.backgroundColor = colores[index % colores.length];
        index++;
    }
}
