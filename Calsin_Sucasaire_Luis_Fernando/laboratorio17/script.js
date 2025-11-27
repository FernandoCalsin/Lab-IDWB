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

// Ejercicio 08:---------------------------------------------------
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
//Ejercicio09------------------------------------------------
function cargarMensaje(callback) {
  setTimeout(() => {
    callback("Mensaje cargado");
  }, 1000);
}
const btn9 = document.getElementById("btn9");
const out9 = document.getElementById("output9");
btn9.addEventListener("click", () => {
  cargarMensaje((mensaje) => {
    out9.textContent = mensaje;
  });
});

//Ejercicio10------------------------------------------------
function cargarUsuario(callback) {
  const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
  setTimeout(() => {
    const usuario = {
      id: 1,
      nombre: "Juancito"
    };
    callback(usuario);
  }, tiempo);
}
const btn10 = document.getElementById("btn10");
const out10 = document.getElementById("output10");
btn10.addEventListener("click", () => {
  cargarUsuario((user) => {
    out10.textContent = `Usuario cargado: ${user.nombre} (ID: ${user.id})`;
  });
});

//Ejercicio11------------------------------------------------
function dividirAsync(a, b, callback) {
  setTimeout(() => {
    if (b === 0) {
      callback(new Error("No se puede dividir entre cero"), null);
    } else {
      callback(null, a / b);
    }
  }, 1500);
}
const btn11 = document.getElementById("btn11");
const out11 = document.getElementById("output11");
btn11.addEventListener("click", () => {
  const a = Number(document.getElementById("numA11").value);
  const b = Number(document.getElementById("numB11").value);
  if (isNaN(a) || isNaN(b)) {
    out11.textContent = "Por favor ingresa números válidos";
    return;
  }
  dividirAsync(a, b, (error, resultado) => {
    if (error) {
      out11.textContent = error.message;
    } else {
      out11.textContent = `Resultado: ${resultado}`;
    }
  });
});


//Ejercicio12------------------------------------------------
function procesarLista(lista, callbackFinal) {
  let procesados = 0;
  lista.forEach((numero) => {
    const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    setTimeout(() => {
      console.log(`Procesando ${numero}...`);
      procesados++;
      if (procesados === lista.length) {
        callbackFinal("Proceso completado");
      }
    }, tiempo);
  });
}
const btn12 = document.getElementById("btn12");
const out12 = document.getElementById("output12");
btn12.addEventListener("click", () => {
  const numeros = [3, 7, 1, 9, 4];
  procesarLista(numeros, (mensaje) => {
    out12.textContent = mensaje;
  });
});

//Ejercicio13------------------------------------------------
function cargarMensajePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mensaje cargado");
    }, 1000);
  });
}
const btn13 = document.getElementById("btn13");
const out13 = document.getElementById("output13");
btn13.addEventListener("click", () => {
  cargarMensajePromise().then((mensaje) => {
    out13.textContent = mensaje;
  });
});

//Ejercicio14------------------------------------------------
function cargarUsuarioPromise() {
  return new Promise((resolve) => {
    const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
    setTimeout(() => {
      const usuario = {
        id: 1,
        nombre: "Juancito"
      };
      resolve(usuario);
    }, tiempo);
  });
}
const btn14 = document.getElementById("btn14");
const out14 = document.getElementById("output14");
btn14.addEventListener("click", () => {
  cargarUsuarioPromise().then((user) => {
    out14.textContent = `Usuario cargado: ${user.nombre} (ID: ${user.id})`;
  });
});

// Ejercicio 15 ------------------------------------------------
function dividirAsyncPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject(new Error("No se puede dividir entre cero"));
      } else {
        resolve(a / b);
      }
    }, 1500);
  });
}
const btn15 = document.getElementById("btn15");
const out15 = document.getElementById("output15");
btn15.addEventListener("click", () => {
  const a = Number(document.getElementById("numA15").value);
  const b = Number(document.getElementById("numB15").value);
  if (isNaN(a) || isNaN(b)) {
    out15.textContent = "Por favor ingresa números válidos";
    return;
  }
  dividirAsyncPromise(a, b)
    .then((resultado) => {
      out15.textContent = `Resultado: ${resultado}`;
    })
    .catch((error) => {
      out15.textContent = error.message;
    });
});


//Ejercicio16------------------------------------------------
function procesarListaPromise(lista) {
  return new Promise((resolve) => {
    let tareas = lista.map((numero) => {
      const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
      return new Promise((res) => {
        setTimeout(() => {
          console.log(`Procesando ${numero}...`);
          res();
        }, tiempo);
      });
    });
    Promise.all(tareas).then(() => {
      resolve("Proceso completado");
    });
  });
}
const btn16 = document.getElementById("btn16");
const out16 = document.getElementById("output16");
btn16.addEventListener("click", () => {
  const numeros = [3, 7, 1, 9, 4];
  procesarListaPromise(numeros).then((mensaje) => {
    out16.textContent = mensaje;
  });
});

//Ejercicio17------------------------------------------------
function cargarMensajeAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mensaje cargado");
    }, 1000);
  });
}
const btn17 = document.getElementById("btn17");
const out17 = document.getElementById("output17");
btn17.addEventListener("click", async () => {
  const mensaje = await cargarMensajeAsync();
  out17.textContent = mensaje;
});

//Ejercicio18------------------------------------------------
function cargarUsuarioAsync() {
  return new Promise((resolve) => {
    const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
    setTimeout(() => {
      const usuario = {
        id: 1,
        nombre: "Juancito"
      };
      resolve(usuario);
    }, tiempo);
  });
}
const btn18 = document.getElementById("btn18");
const out18 = document.getElementById("output18");
btn18.addEventListener("click", async () => {
  const user = await cargarUsuarioAsync();
  out18.textContent = `Usuario cargado: ${user.nombre} (ID: ${user.id})`;
});

// Ejercicio 19 ------------------------------------------------
function dividirAsyncAwait(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject(new Error("No se puede dividir entre cero"));
      } else {
        resolve(a / b);
      }
    }, 1500);
  });
}
const btn19 = document.getElementById("btn19");
const out19 = document.getElementById("output19");
btn19.addEventListener("click", async () => {
  const a = Number(document.getElementById("numA19").value);
  const b = Number(document.getElementById("numB19").value);
  if (isNaN(a) || isNaN(b)) {
    out19.textContent = "Por favor ingresa números válidos";
    return;
  }
  try {
    const resultado = await dividirAsyncAwait(a, b);
    out19.textContent = `Resultado: ${resultado}`;
  } catch (error) {
    out19.textContent = error.message;
  }
});


//Ejercicio20------------------------------------------------
function procesarNumeroAsync(numero) {
  return new Promise((resolve) => {
    const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

    setTimeout(() => {
      console.log(`Procesando ${numero}...`);
      resolve();
    }, tiempo);
  });
}
async function procesarListaAsync(lista) {
  for (const numero of lista) {
    await procesarNumeroAsync(numero);
  }
  return "Proceso completado";
}
const btn20 = document.getElementById("btn20");
const out20 = document.getElementById("output20");
btn20.addEventListener("click", async () => {
  const numeros = [3, 7, 1, 9, 4];
  const mensaje = await procesarListaAsync(numeros);
  out20.textContent = mensaje;
});
