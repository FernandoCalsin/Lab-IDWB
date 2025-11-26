// Ejercicio03-------------------------------------------
function Ejecutar03() {
  fetch("https://jsonplaceholder.typicode.com/users/10")
    .then(response => response.json())
    .then(data => {
      document.getElementById("nombre").textContent = "Nombre: " + data.name;
      document.getElementById("username").textContent = "Usuario: " + data.username;
      document.getElementById("email").textContent = "Email: " + data.email;
    })
    .catch(error => {
      console.error("Error al cargar usuario:", error);
    });
}

document.getElementById("Ejecutar03").addEventListener("click", Ejecutar03);

// Ejercicio04-------------------------------------------
async function Ejecutar04() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/10");
    const data = await respuesta.json();

    console.log("Nombre:", data.name);
    console.log("Usuario:", data.username);
    console.log("Email:", data.email);

  } catch (error) {
    console.error("Error al cargar usuario:", error);
  }
}

document.getElementById("Ejecutar04").addEventListener("click", Ejecutar04);

// Ejercicio05--------------------------------------------------------
function Ejecutar05() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(usuarios => {
      console.log("Nombres de usuarios:");
      usuarios.forEach(u => console.log(u.name));
    })
    .catch(error => console.error("Error:", error));
}
document.getElementById("Ejecutar05").addEventListener("click", Ejecutar05);

// Ejercicio06------------------------------------------------------
async function Ejecutar06() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();

    console.log("Nombres de los usuarios:");
    usuarios.forEach(usuario => console.log(usuario.name));

  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  }
}

document.getElementById("Ejecutar06").addEventListener("click", Ejecutar06);

// Ejercicio07---------------------------------------------------------------------
function Ejecutar07() {

  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(response => response.json())
    .then(data => {
      document.getElementById("nombre7").textContent = "Nombre: " + data.name;
      document.getElementById("email7").textContent = "Email: " + data.email;
      document.getElementById("ciudad7").textContent = "Ciudad: " + data.address.city;
    })
    .catch(error => {
      console.error("Error al cargar usuario:", error);
    });
}
document.getElementById("Ejecutar07").addEventListener("click", Ejecutar07);

// Ejercicio08---------------------------------------------------------------------
async function Ejecutar08() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data = await respuesta.json();

    document.getElementById("nombre8").textContent = "Nombre: " + data.name;
    document.getElementById("email8").textContent  = "Email: " + data.email;
    document.getElementById("ciudad8").textContent = "Ciudad: " + data.address.city;

  } catch (error) {
    console.error("Error al cargar usuario:", error);
  }
}
document.getElementById("Ejecutar08").addEventListener("click", Ejecutar08);
