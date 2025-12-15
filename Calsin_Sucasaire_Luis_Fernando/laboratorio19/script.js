//Ejercicio03---------------------------------------------------------------
document.getElementById("ejecutar03").addEventListener("click", () => {
    ejercicio03();
});
function ejercicio03() {
  const campoDeTexto = document.getElementById("texto");
  const idPokemon = campoDeTexto.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
    fetch(url)
    .then(res => {
      if (!res.ok) {
         throw new Error('Pokémon no encontrado o ID inválido.'); 
      }
      return res.json();
    }) 
    .then(data => {
      const nombre = data.name;
      console.log("Nombre del Pokémon:", nombre);
    })
    .catch(err => {
      console.error("Error al obtener el Pokémon:", err);      
    });
}
//Ejercicio04-----------------------------------------------------------
document.getElementById("ejecutar04").addEventListener("click",()=>{
  ejercicio04();
});
function ejercicio04(){
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(res=>{
    if(!res.ok){
      throw new error("no se encontro el pokemon");
    }
    return res.json();
  })
  .then(data=>{
    const peso=data.weight;
    const altura=data.height;
    console.log("peso:",peso);
    console.log("altura:",altura);
  })
  .catch(err=>{
    console.error("error en la busqueda");
  });
}
//Ejericio05------------------------------------------------------------
document.getElementById("ejecutar05").addEventListener("click",()=>{
  ejercicio05();
});
async function ejercicio05(){
  try{
    const res=await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if(!res.ok){
      throw new Error("Error en la solicitud:"+ res.status);
    }
    const data=await res.json();
    console.log("algura",data.height);
    console.log("peso",data.weight);
  }catch (err){
    console.log("Error",err);
  }
}
//Ejercicio06---------------------------------------------------------------
document.getElementById("ejecutar06").addEventListener("click", () => {
    ejercicio06();
});
function ejercicio06() {
  const pokemonName = "charizard";
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  console.log(`Buscando la URL del sprite de ${pokemonName}...`);
  fetch(url)
  .then(res => {
    if (!res.ok) {    
      throw new Error(`Error ${res.status}: Pokémon ${pokemonName} no encontrado.`); 
    }
    return res.json();
    })
    .then(data => {
      const spriteUrl = data.sprites.front_default;   
      console.log(`URL del sprite frontal de ${pokemonName.toUpperCase()}:`);
      console.log(spriteUrl);
    })
    .catch(err => {
      console.error("Error de Conexión/Búsqueda:", err);
    });
}
//Ejercicio07--------------------------------------------------------------------------
document.getElementById("ejecutar07").addEventListener("click",()=>{
  ejecutar07();
});
function ejecutar07(){ 
  fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then(res=>{
    if(!res.ok){
      throw new Error("no se encontro lista");
    }
    return res.json();
  })
  .then(data=>{
    const listaPokemon=data.results;
    for (let i = 0; i < listaPokemon.length; i++) {
      const pokemon = listaPokemon[i];
      console.log(`${i + 1}) ${pokemon.name.toUpperCase()}`);
    }
  })
  .catch(err=>{
    console.error("error en la busqueda");
  });
}
//Ejercicio08-------------------------------------------------------
document.getElementById("ejecutar08").addEventListener("click", () => {
  ejecutar08();
});
async function ejecutar08() {
  try {
    let numero = Math.floor(Math.random() * 898) + 1;
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
    const datos = await respuesta.json();
    document.getElementById("resultado08").innerHTML = `
      <h2>Pokémon aleatorio</h2>
      <p><strong>ID:</strong> ${datos.id}</p>
      <p><strong>Nombre:</strong> ${datos.name}</p>
      <img src="${datos.sprites.front_default}" alt="${datos.name}">
      <p><strong>Peso:</strong> ${datos.weight}</p>
      <p><strong>Altura:</strong> ${datos.height}</p>
      <p><strong>Habilidades:</strong> 
        ${datos.abilities.map(h => h.ability.name).join(", ")}
      </p>
    `;
  } catch (error) {
    console.error("Error al obtener el Pokémon:", error);
  }
}
//Ejercicio09-------------------------------------------------------
document.getElementById("ejecutar09").addEventListener("click", () => {
  ejecutar09();
});
async function ejecutar09() {
  const id = document.getElementById("pokemonID09").value;
  if (id === "" || id < 1 || id > 898) {
    document.getElementById("resultado09").innerHTML = "<p>ID inválido. Debe ser entre 1 y 898.</p>";
    return;
  }
  try {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const datos = await respuesta.json();
    document.getElementById("resultado09").innerHTML = `
      <h2>Pokémon encontrado</h2>
      <p><strong>ID:</strong> ${datos.id}</p>
      <p><strong>Nombre:</strong> ${datos.name}</p>
      <img src="${datos.sprites.front_default}" alt="${datos.name}">
      <p><strong>Peso:</strong> ${datos.weight}</p>
      <p><strong>Altura:</strong> ${datos.height}</p>
      <p><strong>Habilidades:</strong> 
        ${datos.abilities.map(h => h.ability.name).join(", ")}
      </p>
    `;
  } catch (error) {
    document.getElementById("resultado09").innerHTML = "<p>No se encontró el Pokémon.</p>";
  }
}
//Ejercicio10-------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  ejecutar10();
});
async function ejecutar10() {
  const contenedor = document.getElementById("resultado10");
  contenedor.innerHTML = "<p>Cargando Pokémon...</p>";
  let listaPokemones = [];
  try {
    for (let i = 1; i <= 10; i++) {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await respuesta.json();
      listaPokemones.push(data);
    }
    contenedor.innerHTML = listaPokemones.map(poke => `
      <div style="
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        width: 180px;
        display: inline-block;
        text-align: center;
        border-radius: 10px;
      ">
        <h3>${poke.name}</h3>
        <img src="${poke.sprites.front_default}" alt="${poke.name}">
        <p><strong>ID:</strong> ${poke.id}</p>
      </div>
    `).join("");
  } catch (error) {
    contenedor.innerHTML = "<p>Error al cargar los Pokémon.</p>";
  }
}
//Ejercicio11-------------------------------------------------------
document.getElementById("ejecutar11").addEventListener("click", () => {
  ejecutar11();
});
async function ejecutar11() {
  const entrada = document.getElementById("pokemonInput11").value.trim().toLowerCase();
  if (entrada === "") {
    document.getElementById("resultado11").innerHTML = "<p>Ingrese un nombre o ID válido.</p>";
    return;
  }
  try {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${entrada}`);
    const data = await respuesta.json();
    const tipos = data.types.map(t => t.type.name).join(", ");
    document.getElementById("resultado11").innerHTML = `
      <h2>Pokémon encontrado</h2>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p><strong>Tipos:</strong> ${tipos}</p>
    `;
  } catch (error) {
    document.getElementById("resultado11").innerHTML = "<p>No se encontró el Pokémon.</p>";
  }
}
//Ejercicio12-------------------------------------------------------
document.getElementById("ejecutar12").addEventListener("click", () => {
  ejecutar12();
});
async function ejecutar12() {
  const entrada = document.getElementById("pokemonInput12").value.trim().toLowerCase();
  if (entrada === "") {
    document.getElementById("resultado12").innerHTML = "<p>Ingrese un nombre o ID válido.</p>";
    return;
  }
  try {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${entrada}`);
    const data = await respuesta.json();
    const statsHTML = data.stats
      .map(s => `<li><strong>${s.stat.name}:</strong> ${s.base_stat}</li>`)
      .join("");
    document.getElementById("resultado12").innerHTML = `
      <h2>Estadísticas base</h2>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <ul>
        ${statsHTML}
      </ul>
    `;
  } catch (error) {
    document.getElementById("resultado12").innerHTML = "<p>No se encontró el Pokémon.</p>";
  }
}
//Ejercicio13-------------------------------------------------------
document.getElementById("ejecutar13").addEventListener("click", () => {
  ejecutar13();
});
async function ejecutar13() {
  const entrada = document.getElementById("pokemonInput13").value.trim().toLowerCase();

  if (entrada === "") {
    document.getElementById("resultado13").innerHTML = "<p>Ingrese un nombre o ID válido.</p>";
    return;
  }
  try {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${entrada}`);
    const data = await respuesta.json();
    const statsMostrar = ["hp", "attack", "defense", "speed", "special-attack", "special-defense"];
     const stats = data.stats
      .filter(s => statsMostrar.includes(s.stat.name))
      .map(s => `
        <tr>
          <td><strong>${s.stat.name}</strong></td>
          <td>${s.base_stat}</td>
        </tr>
      `)
      .join("");
    document.getElementById("resultado13").innerHTML = `
      <h2>Estadísticas de ${data.name}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">      
      <table border="1" style="margin-top: 10px; border-collapse: collapse;">
        <tr>
          <th>Stat</th>
          <th>Valor</th>
        </tr>
        ${stats}
      </table>
    `;
  } catch (error) {
    document.getElementById("resultado13").innerHTML = "<p>No se encontró el Pokémon.</p>";
  }
}
//Ejercicio14-------------------------------------------------------
let listaPokemon14 = []; 
let paginaActual14 = 0;
document.addEventListener("DOMContentLoaded", () => {
  cargarPokemones14();
  document.getElementById("anterior14").addEventListener("click", paginaAnterior14);
  document.getElementById("siguiente14").addEventListener("click", paginaSiguiente14);
});
async function cargarPokemones14() {
  for (let i = 1; i <= 12; i++) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await resp.json();
    listaPokemon14.push(data);
  }
  mostrarPagina14();
}
function mostrarPagina14() {
  const contenedor = document.getElementById("resultado14");
  const inicio = paginaActual14 * 3;
  const fin = inicio + 3;
  const pokes = listaPokemon14.slice(inicio, fin);
  contenedor.innerHTML = pokes.map(p => `
    <div style="
      border: 1px solid #ccc;
      width: 180px;
      padding: 10px;
      margin: 10px;
      text-align: center;
      display: inline-block;
      border-radius: 10px;
    ">
      <img src="${p.sprites.front_default}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p><strong>ID:</strong> ${p.id}</p>
    </div>
  `).join("");
}
function paginaSiguiente14() {
  if ((paginaActual14 + 1) * 3 < listaPokemon14.length) {
    paginaActual14++;
    mostrarPagina14();
  }
}
function paginaAnterior14() {
  if (paginaActual14 > 0) {
    paginaActual14--;
    mostrarPagina14();
  }
}





