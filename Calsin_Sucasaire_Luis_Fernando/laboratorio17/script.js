//Ejercicio03--------------------------------------------
const out = document.getElementById('output');

function showMessage(prefix, err) {
  const msg = err?.message || String(err);
  const name = err?.name || "Error";
  out.innerHTML = `<div class="error">${prefix} — ${name}: ${msg}</div>`;
  console.error(prefix, err);
}
document.getElementById('refErrBtn').addEventListener('click', () => {
  try {
    noExisteFuncion();
  } catch (e) {
    showMessage("ReferenceError provocado", e);
  }
});
document.getElementById('typeErrBtn').addEventListener('click', () => {
  try {
    let x = null;
    x.propiedad;
  } catch (e) {
    showMessage("TypeError provocado", e);
  }
});
document.getElementById('rangeErrBtn').addEventListener('click', () => {
  try {
    let arr = new Array(-10);
  } catch (e) {
    showMessage("RangeError provocado", e);
  }
});

//Ejercicio04------------------------------------------
const btn = document.getElementById("btn");
const out2 = document.getElementById("output2");
btn.addEventListener("click", () => {
  try {        
    const textoInvalido = '{ "nombre": "Luis", edad: 22 ';
    JSON.parse(textoInvalido);
  } catch (e) {
    out2.textContent = `${e.name}: ${e.message}`;
    console.error(e.name, e.message);
  }
});

// Ejercicio05----------------------------
const btn5 = document.getElementById("btn5");
const out5 = document.getElementById("output5");

btn5.addEventListener("click", () => {
    try {        
        console.log.noExiste("Esto causa un error");
    } catch (e) {
        out5.textContent = "falló";
    } finally {
        out5.textContent += "\nsiempre se ejecuta";
    }
});

// Ejercicio06---------------------------------
const btn6 = document.getElementById("btn6");
const edadInput = document.getElementById("edadInput");
const out6 = document.getElementById("output6");

function validarEdad(edad) {
    if (isNaN(edad) || edad < 0) {
        throw new Error("Edad inválida");
    }
    return "Edad válida";
}
btn6.addEventListener("click", () => {
    out6.textContent = "";
    const edad = Number(edadInput.value);
    try {
        const mensaje = validarEdad(edad);
        out6.textContent = mensaje;
    } catch (e) {
        out6.textContent = `${e.name}: ${e.message}`;
    }
});

// Ejercicio 07---------------------------------------------------
const btn7 = document.getElementById("btn7");
const out7 = document.getElementById("output7");
btn7.addEventListener("click", () => {
    out7.textContent = "";
    try {
        let x = null;
        x.nombre;
    } catch (e) {
        out7.textContent = `${e.name}: ${e.message}`;
        console.error(e);
    }
});

// Ejercicio 08: Propagación de errores con throw
const btn8 = document.getElementById("btn8");
const out8 = document.getElementById("output8");
btn8.addEventListener("click", () => {
    out8.textContent = "";
    function nivel2() {
        try {
            x = noExisteVariable;
        } catch (e) {
            out8.textContent += `Nivel 2 atrapó el error: ${e.message}\n`;
            throw e;
        }
    }
    function nivel1() {
        try {
            nivel2();
        } catch (e) {
            out8.textContent += `Nivel 1 recibió el error: ${e.message}\n`;
            throw e;
        }
    }
    try {
        nivel1();
    } catch (e) {
        out8.textContent += `ERROR FINAL capturado en el nivel superior: ${e.message}`;
    }
});



