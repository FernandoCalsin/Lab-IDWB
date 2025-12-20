import json
import re
libros = []
contador_id = [1]

def app(environ, start_response):
    metodo = environ["REQUEST_METHOD"]
    ruta = environ.get("PATH_INFO", "")
    
    if ruta =="/libros"and metodo =="GET":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(libros).encode("utf-8")]

    elif ruta == "/libros" and metodo == "POST":
        try:
            longitud = int(environ.get("CONTENT_LENGTH", 0))
            datos = environ["wsgi.input"].read(longitud)
            libro = json.loads(datos.decode("utf-8"))

            nuevo_libro = {
                "id": contador_id[0],
                "titulo": libro.get("titulo"),
                "autor": libro.get("autor"),
                "anio": libro.get("anio")
            }
            libros.append(nuevo_libro)
            contador_id[0] += 1

            start_response("201 Created", [("Content-Type", "application/json")])
            return [json.dumps(nuevo_libro).encode("utf-8")]
        except Exception as e:
            start_response("400 Bad Request", [("Content-Type", "application/json")])
            return [json.dumps({"error": str(e)}).encode("utf-8")]

    elif re.match(r"^/libros/\d+$", ruta) and metodo == "GET":
        id_libro = int(ruta.split("/")[-1])
        libro = next((l for l in libros if l["id"] == id_libro), None)

        if libro:
            start_response("200 OK", [("Content-Type", "application/json")])
            return [json.dumps(libro).encode("utf-8")]
        else:
            start_response("404 Not Found", [("Content-Type", "application/json")])
            return [json.dumps({"error": "Libro no encontrado"}).encode("utf-8")]

    else:
        start_response("404 Not Found",[("Content-Type", "text/plain")])
        return [b"Ruta no encontrada"]
