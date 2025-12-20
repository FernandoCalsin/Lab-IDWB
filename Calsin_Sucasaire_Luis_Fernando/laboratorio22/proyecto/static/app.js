document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-equipo");
  const lista = document.getElementById("equipos");

  fetch("/equipos")
    .then(res => res.json())
    .then(data => {
      data.forEach(equipo => agregarEquipo(equipo));
    });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(form));
    datos.nivelAtaque = parseInt(datos.nivelAtaque);
    datos.nivelDefensa = parseInt(datos.nivelDefensa);

    fetch("/equipos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos)
    })
    .then(res => res.json())
    .then(equipo => {
      agregarEquipo(equipo);
      form.reset();
    });
  });

  function agregarEquipo(equipo) {
    const li = document.createElement("li");
    li.textContent = `${equipo.id} - ${equipo.nombre} (${equipo.ciudad}) | Ataque: ${equipo.nivelAtaque}, Defensa: ${equipo.nivelDefensa}`;
    lista.appendChild(li);
  }
});
