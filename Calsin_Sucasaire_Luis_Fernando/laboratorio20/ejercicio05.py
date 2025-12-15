ingreso_mensual = float(input("Ingrese su ingreso mensual: "))
ingreso_anual = ingreso_mensual * 14
print(f"\nIngreso anual calculado: {ingreso_anual:.2f}\n")
tramos = [
    (20000, 0.00),
    (50000, 0.10),
    (100000, 0.20),
    (float('inf'), 0.30)
]
impuesto_total = 0
impuesto_por_tramo = []
limite_inferior = 0
for limite_superior, tasa in tramos:
    if ingreso_anual > limite_inferior:
        monto_gravado = min(ingreso_anual, limite_superior) - limite_inferior
        impuesto = monto_gravado * tasa
        impuesto_por_tramo.append((limite_inferior, limite_superior, tasa, impuesto))
        impuesto_total += impuesto
    limite_inferior = limite_superior
print("=== DETALLE DE IMPUESTOS POR TRAMO ===")
for tramo in impuesto_por_tramo:
    li, ls, tasa, impuesto = tramo
    ls_txt = "∞" if ls == float("inf") else f"{ls}"
    print(f"Tramo [{li} – {ls_txt}] Tasa: {tasa*100:.0f}%  → Impuesto: {impuesto:.2f}")

print("\n=== RESUMEN ===")
print(f"Total de impuestos: {impuesto_total:.2f}")
tasa_efectiva = (impuesto_total / ingreso_anual) * 100
print(f"Tasa efectiva real: {tasa_efectiva:.2f}%")
