from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class MiHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        html = """
        <html>
          <head><title>Servidor de suma</title></head>
          <body>
            <h1>Servidor funcionando </h1>
            <p>Ingresa dos numeros para sumarlos:</p>
            <form method="POST" action="/">
              <label for="a">Numero A:</label>
              <input type="number" name="a" required><br><br>
              <label for="b">Numero B:</label>
              <input type="number" name="b" required><br><br>
              <button type="submit">Calcular suma</button>
            </form>
          </body>
        </html>
        """
        self.wfile.write(html.encode("utf-8"))

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode("utf-8")

        params = {}
        for pair in post_data.split("&"):
            if "=" in pair:
                k, v = pair.split("=")
                params[k] = int(v)

        a = params.get("a", 0)
        b = params.get("b", 0)
        resultado = a + b

        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        respuesta = f"""
        <html>
          <head><title>Resultado</title></head>
          <body>
            <h1>Resultado de la suma</h1>
            <p>{a} + {b} = <strong>{resultado}</strong></p>
            <a href="/">Volver al formulario</a>
          </body>
        </html>
        """
        self.wfile.write(respuesta.encode("utf-8"))

server = HTTPServer(("localhost", 8000), MiHandler)
print("Servidor corriendo en http://localhost:8000")
server.serve_forever()
