import json
import os
import re

equipos = []
contador_id = [1]

def app(environ, start_response):
    metodo = environ["REQUEST_METHOD"]
    ruta = environ.get("PATH_INFO", "")

    if ruta.startswith("/static/"):
        archivo = ruta.lstrip("/")
        if os.path.isfile(archivo):
            ext = os.path.splitext(archivo)[1]
            tipos = {
                ".html": "text/html",
                ".css": "text/css",
                ".js": "application/javascript",
                ".png": "image/png",
                ".jpg": "image/jpeg",
                ".jpeg": "image/jpeg"
            }
            tipo = tipos.get(ext, "application/octet-stream")
            with open(archivo, "rb") as f:
                contenido = f.read()
            start_response("200 OK", [("Content-Type", tipo)])
            return [contenido]
        else:
            start_response("404 Not Found", [("Content-Type", "text/plain")])
            return [b"Archivo no encontrado"]

    if ruta == "/equipos" and metodo == "GET":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(equipos).encode("utf-8")]

    elif ruta == "/equipos" and metodo == "POST":
        try:
            longitud = int(environ.get("CONTENT_LENGTH", 0))
            datos = environ["wsgi.input"].read(longitud)
            equipo = json.loads(datos.decode("utf-8"))

            nuevo = {
                "id": contador_id[0],
                "nombre": equipo.get("nombre"),
                "ciudad": equipo.get("ciudad"),
                "nivelAtaque": equipo.get("nivelAtaque"),
                "nivelDefensa": equipo.get("nivelDefensa")
            }
            equipos.append(nuevo)
            contador_id[0] += 1

            start_response("201 Created", [("Content-Type", "application/json")])
            return [json.dumps(nuevo).encode("utf-8")]
        except Exception as e:
            start_response("400 Bad Request", [("Content-Type", "application/json")])
            return [json.dumps({"error": str(e)}).encode("utf-8")]

    elif re.match(r"^/equipos/\d+$", ruta) and metodo == "GET":
        id_buscar = int(ruta.split("/")[-1])
        equipo = next((e for e in equipos if e["id"] == id_buscar), None)

        if equipo:
            start_response("200 OK", [("Content-Type", "application/json")])
            return [json.dumps(equipo).encode("utf-8")]
        else:
            start_response("404 Not Found", [("Content-Type", "application/json")])
            return [json.dumps({"error": "Equipo no encontrado"}).encode("utf-8")]

    else:
        start_response("404 Not Found", [("Content-Type", "text/plain")])
        return [b"Ruta no encontrada"]
