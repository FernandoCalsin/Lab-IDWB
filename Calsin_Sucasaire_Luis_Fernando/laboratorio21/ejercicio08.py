"""Crear una lista de diccionarios donde cada diccionario represente un equipo de fútbol, con las siguientes claves:
Nombre, país, nivelAtaque, nivelDefensa
Luego, convierte la lista completa a una cadena JSON y muéstrala en pantalla con formato legible"""
import json

equipos = [
    {
        "Nombre": "Barcelona",
        "País": "España",
        "nivelAtaque": 90,
        "nivelDefensa": 85
    },
    {
        "Nombre": "Bayern Múnich",
        "País": "Alemania",
        "nivelAtaque": 88,
        "nivelDefensa": 87
    },
    {
        "Nombre": "Manchester City",
        "País": "Inglaterra",
        "nivelAtaque": 92,
        "nivelDefensa": 89
    }
]
json_legible = json.dumps(equipos, indent=4, ensure_ascii=False)
print(json_legible)

