import numpy as np
ingreso_mensual = float(input("Ingrese ingreso mensual: "))
ingreso_anual = ingreso_mensual * 14

inicios = np.array([0, 20000, 50000, 100000])
fines = np.array([20000, 50000, 100000, np.inf])
tasas = np.array([0.00, 0.10, 0.20, 0.30])

montos = np.clip(ingreso_anual, inicios, fines) - inicios
montos = np.where(ingreso_anual > inicios, montos, 0)

impuestos = montos * tasas

print("\n--- IMPUESTO POR TRAMOS (NumPy) ---")
for i in range(len(tasas)):
    print(f"{inicios[i]} - {fines[i]}  :  {impuestos[i]:.2f}")

impuesto_total = impuestos.sum()

print("\nTotal de impuestos:", round(impuesto_total, 2))
print("Tasa efectiva real:", round((impuesto_total / ingreso_anual) * 100, 2), "%")
