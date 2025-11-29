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

//Ejercicio10-------------------------------------------------------------------
const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
document.getElementById("btnValidar").addEventListener("click", () => {
    const pwd = document.getElementById("pwd").value;
    const res = document.getElementById("resultado");

    if (re.test(pwd)) {
        res.textContent = "Contraseña válida ";
    } else {
        res.textContent = "Contraseña inválida  (Debe tener 8 caracteres, 1 mayúscula, 1 minúscula y 1 número)";
    }
});
//Ejercicio11---------------------------------------------------------------------
const reURL = /https:\/\/[^\s/$.?#].[^\s]*/gi;
document.getElementById("btnBuscar").addEventListener("click", () => {
    const texto = document.getElementById("texto").value;
    const resultado = document.getElementById("resultado");
    const urls = texto.match(reURL);
    if (urls && urls.length > 0) {
        resultado.textContent = "URLs seguras encontradas:\n" + urls.join("\n");
    } else {
        resultado.textContent = "No se encontraron URLs seguras.";
    }
});
//Ejercicio12-------------------------------------------------------
const reHTML = /<[^>]*>/g;

document.getElementById("btnQuitar").addEventListener("click", () => {
    const texto = document.getElementById("texto").value;
    const resultado = document.getElementById("resultado");
    const limpio = texto.replace(reHTML, "");
    resultado.textContent = limpio;
});

//Ejerciciio13-------------------------------------------------------
const reOraciones = /[.!?]+/;

document.getElementById("btnDividir").addEventListener("click", () => {
    const texto = document.getElementById("texto").value;
    const resultado = document.getElementById("resultado");
    const partes = texto.split(reOraciones).filter(p => p.trim() !== "");

    resultado.textContent = "[" + partes.join(" | ") + "]";
});

//Ejercicio14---------------------------------------------------
const reFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
document.getElementById("btnValidarFecha").addEventListener("click", () => {
    const fecha = document.getElementById("fecha").value;
    const resultado = document.getElementById("resultado");
    if (reFecha.test(fecha)) {
        resultado.textContent = "Formato válido ";
    } else {
        resultado.textContent = "Formato inválido(use dd/mm/yyyy)";
    }
});


