salario_base = float(input("Ingresa tu salario base: "))
horas_extras = float(input("Ingresa las horas extras trabajadas: "))
pago_hora_extra = float(input("Ingresa el pago por hora extra: "))
bono = float(input("Ingresa el bono adicional: "))
afp = float(input("Porcentaje AFP (%): "))
salud = float(input("Porcentaje Salud (%): "))

salario_bruto = salario_base + (horas_extras * pago_hora_extra) + bono
descuento_afp = salario_base * afp / 100
descuento_salud = salario_base * salud / 100
descuentos_totales = descuento_afp + descuento_salud
salario_neto = salario_bruto - descuentos_totales

print("\n--- RESULTADOS ---")
print(f"Salario bruto: S/. {salario_bruto:.2f}")
print(f"Descuento AFP: S/. {descuento_afp:.2f}")
print(f"Descuento Salud: S/. {descuento_salud:.2f}")
print(f"Descuentos totales: S/. {descuentos_totales:.2f}")
print(f"Salario neto: S/. {salario_neto:.2f}")
