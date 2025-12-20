from wsgiref.simple_server import make_server
from app_equipos import app

if __name__ == "__main__":
    with make_server("localhost", 8000, app) as servidor:
        print("Servidor corriendo en http://localhost:8000")
        servidor.serve_forever()
