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

function ejecutar09(){
    const nuevoParrafo=document.createElement('p');
    nuevoParrafo.textContent="Elemento insertado con js";
    const body= document.body;
    body.appendChild(nuevoParrafo);
}

function ejecutar10(){
    const subtituloNuevo=document.createElement('h3');
    subtituloNuevo.textContent="elemento h3 antes del primer p";
    const primerP=document.querySelector("p");
    if(primerP){
        document.body.insertBefore(subtituloNuevo,primerP);
    }    
}

function ejecutar11(){
    const lista=document.createElement('ul');
    for(let i=1;i<=5;i++){
        const li =document.createElement('li');
        li.textContent=`Elemento ${i}`;
        lista.appendChild(li);
    }
    const section=document.querySelector('section');
    if(section){
        section.appendChild(lista);
    }
}

function ejecutar12(){
    const div=document.createElement('div');
    div.textContent=`Parrafo Remplazado`;
    const parrafo=document.querySelector(".remplazar");
    parrafo.replaceWith(div);

}

function ejecutar13(){
    const parrafos = document.querySelectorAll("p");
    
    const ultimo=parrafos[parrafos.length-1];
    if(ultimo){
        ultimo.remove();
    }
}