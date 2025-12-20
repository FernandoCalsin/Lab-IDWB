from wsgiref.simple_server import make_server

def app(environ, start_response):
    path = environ.get("PATH_INFO", "/")

    if path == "/":
        status = "200 OK"
        headers = [("Content-type", "text/plain; charset=utf-8")]
        start_response(status, headers)
        return [b"Inicio"]

    elif path == "/saludo":
        status = "200 OK"
        headers = [("Content-type", "text/plain; charset=utf-8")]
        start_response(status, headers)
        return [b"Hola mundo desde WSGI"]

    else:
        status = "404 Not Found"
        headers = [("Content-type", "text/plain; charset=utf-8")]
        start_response(status, headers)
        return [b"404 - Ruta no encontrada"]

if __name__ == "__main__":
    with make_server("localhost", 8000, app) as server:
        print("Servidor WSGI corriendo en http://localhost:8000")
        server.serve_forever()
