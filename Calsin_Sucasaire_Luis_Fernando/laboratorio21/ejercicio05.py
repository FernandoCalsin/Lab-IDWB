"""5. Leer la operación como un solo string
Ejemplo: "10 / 2"
Separar los componentes y validar:
• numero1 y numero2 deben poder convertirse a float
• operador debe ser uno de: + - * /
Realizar la operación, pero manejar las excepciones:
• División entre cero → mostrar mensaje personalizado
• Valores inválidos → manejar ValueError
• Operador inválido → lanzar una excepción personalizada (crear clase que herede de Exception)
en python"""
class OperadorInvalidoError(Exception):
    def __init__(self, operador):
        super().__init__(f"Operador inválido: '{operador}'. Debe ser uno de + - * /")

def calcular_operacion(operacion: str):
    try:
        partes = operacion.split()
        if len(partes) != 3:
            raise ValueError("La operación debe tener el formato: numero1 operador numero2")

        numero1_str, operador, numero2_str = partes

        try:
            numero1 = float(numero1_str)
            numero2 = float(numero2_str)
        except ValueError:
            raise ValueError("Los valores deben ser números válidos")

        if operador not in ["+", "-", "*", "/"]:
            raise OperadorInvalidoError(operador)

        if operador == "+":
            return numero1 + numero2
        elif operador == "-":
            return numero1 - numero2
        elif operador == "*":
            return numero1 * numero2
        elif operador == "/":
            if numero2 == 0:
                raise ZeroDivisionError("No se puede dividir entre cero")
            return numero1 / numero2

    except ZeroDivisionError as e:
        return f"Error: {e}"
    except ValueError as e:
        return f"Error: {e}"
    except OperadorInvalidoError as e:
        return f"Error: {e}"

print(calcular_operacion("10 / 2"))
print(calcular_operacion("10 / 0")) 
print(calcular_operacion("abc + 2"))
print(calcular_operacion("10 ^ 2"))
