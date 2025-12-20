import math
class Figura:
    def calcular_area(self):
        raise NotImplementedError("Debes implementar calcular_area()")    

    def calcular_perimetro(self):
        raise NotImplementedError("Debes implementar calcular_perimetro()")    

    def nombre(self):
        return self.__class__.__name__

class Rectangulo(Figura):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto    

    def calcular_area(self):
        return self.ancho * self.alto    

    def calcular_perimetro(self):
        return 2 * (self.ancho + self.alto)

class Triangulo(Figura):
    def __init__(self, lado, altura):
        self.lado = lado
        self.altura = altura    

    def calcular_area(self):
        return (self.lado * self.altura) / 2    

    def calcular_perimetro(self):
        return 3 * self.lado

class Circulo(Figura):
    def __init__(self, radio):
        self.radio = radio    

    def calcular_area(self):
        return math.pi * self.radio ** 2    

    def calcular_perimetro(self):
        return 2 * math.pi * self.radio
