ingreso_mensual = float(input("Ingrese ingreso mensual: "))
ingreso_anual = ingreso_mensual * 14
tramos = [
    (0, 20000, 0.00),
    (20000, 50000, 0.10),
    (50000, 100000, 0.20),
    (100000, float("inf"), 0.30)
]
impuesto_total = 0
impuesto_por_tramo = []
for inicio, fin, tasa in tramos:
    if ingreso_anual > inicio:
        monto = min(ingreso_anual, fin) - inicio
        impuesto = monto * tasa
        impuesto_por_tramo.append((f"{inicio} - {fin}", impuesto))
        impuesto_total += impuesto
print("\n--- IMPUESTO POR TRAMOS (Python puro) ---")
for tramo, imp in impuesto_por_tramo:
    print(f"{tramo}: {imp:.2f}")
print("\nTotal de impuestos:", round(impuesto_total, 2))
print("Tasa efectiva real:", round((impuesto_total / ingreso_anual) * 100, 2), "%")
