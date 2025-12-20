from wsgiref.simple_server import make_server
from app_libros import app

if __name__ == "__main__":
    with make_server("localhost", 8000, app) as servidor:
        print("Servidor WSGI corriendo en http://localhost:8000")
        servidor.serve_forever()
