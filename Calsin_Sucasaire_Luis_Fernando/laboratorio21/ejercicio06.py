#6. Crear un módulo geometria.py con lo hecho en el ejercicio 3 y utilizarlo desde otro archivo
from geometria import Rectangulo, Triangulo, Circulo

def mostrar_info(figura):
    print(f"{figura.nombre()}:")
    print(f"  Área = {figura.calcular_area():.2f}")
    print(f"  Perímetro = {figura.calcular_perimetro():.2f}")
    print("-------------------------")

if __name__ == "__main__":
    figuras = [
        Rectangulo(4, 6),
        Triangulo(5, 4),
        Circulo(3)
    ]

    for figura in figuras:
        mostrar_info(figura)
