//Ejercicio03-------------------------------------------------------------------------------------------------------
document.getElementById("ejecutar03").addEventListener("click", async () => {
  const id = document.getElementById("pokemonId").value;
  if (!id || id <= 0) {
    console.log("ID inválido");
    return;
  }
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) {
      console.log("No existe un Pokémon con ese ID");
      return;
    }
    const data = await res.json();
    console.log("Nombre del Pokémon:", data.name);
  } catch (error) {
    console.log("Error al consultar la API");
  }
});
//Ejercicio04-------------------------------------------------------------------------------------------------------
document.getElementById("ejecutar04").addEventListener("click", () => {
  fetch("https://pokeapi.co/api/v2/pokemon/25")
    .then(response => {
      if (!response.ok) {
        console.log("Error al obtener datos de Pikachu");
        return null;
      }
      return response.json();
    })
    .then(data => {
      if (data) {
        console.log("Altura de Pikachu:", data.height);
        console.log("Peso de Pikachu:", data.weight);
      }
    })
    .catch(error => {
      console.log("Error en la petición:", error);
    });
});
//Ejercicio05-------------------------------------------------------------------------------------------------------
document.getElementById("ejecutar05").addEventListener("click", async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    if (!res.ok) {
      console.log("Error al obtener datos de Pikachu");
      return;
    }
    const data = await res.json();
    console.log("Altura de Pikachu:", data.height);
    console.log("Peso de Pikachu:", data.weight);
  } catch (error) {
    console.log("Error en la petición:", error);
  }
});
//Ejercicio06-------------------------------------------------------------------------------------------------------
document.getElementById("ejecutar06").addEventListener("click", async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/6");
    if (!res.ok) {
      console.log("Error al obtener datos de Charizard");
      return;
    }
    const data = await res.json();
    console.log("Sprite de Charizard:", data.sprites.front_default);
  } catch (error) {
    console.log("Error en la petición:", error);
  }
});
//Ejercicio07-------------------------------------------------------------------------------------------------------
document.getElementById("ejecutar07").addEventListener("click", async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    if (!res.ok) {
      console.log("Error al obtener la lista de Pokémon");
      return;
    }
    const data = await res.json();
    console.log("Primeros 20 Pokémon:");
    data.results.forEach((pokemon, index) => {
      console.log(`${index + 1}. ${pokemon.name}`);
    });
  } catch (error) {
    console.log("Error en la petición:", error);
  }
});
//Ejercicio08-------------------------------------------------------------------------------------------------------
document.getElementById("ejecutar08").addEventListener("click", async () => {
  try {
    // Generar número aleatorio entre 1 y 898
    const randomId = Math.floor(Math.random() * 898) + 1;
    console.log("ID aleatorio generado:", randomId);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    if (!res.ok) {
      console.log("Error al obtener el Pokémon");
      return;
    }
    const data = await res.json();
    console.log("Pokémon obtenido:");
    console.log("Nombre:", data.name);
    console.log("Altura:", data.height);
    console.log("Peso:", data.weight);
  } catch (error) {
    console.log("Error en la petición:", error);
  }
});




