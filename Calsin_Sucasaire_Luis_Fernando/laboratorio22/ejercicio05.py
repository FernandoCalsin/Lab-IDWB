from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Servidor Flask</title>
    </head>
    <body>
        <h1>Servidor funcionando</h1>
        <p>Ruta raíz con HTML estático</p>
    </body>
    </html>
    """

@app.route("/saludo")
def saludo():
    return jsonify({"msg": "Hola"})

if __name__ == "__main__":
    app.run(debug=True)
