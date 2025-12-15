estudiantes = []
def agregar_estudiante():
    print("\n--- Agregar estudiante ---")
    nombre = input("Nombre: ")
    edad = int(input("Edad: "))
    promedio = float(input("Promedio: "))
    estudiante = {
        "nombre": nombre,
        "edad": edad,
        "promedio": promedio
    }
    estudiantes.append(estudiante)
    print(" Estudiante agregado correctamente.")
def mostrar_estudiantes():
    print("\n--- Lista de estudiantes ---")
    if not estudiantes:
        print("No hay estudiantes registrados.")
        return
    for i, est in enumerate(estudiantes, start=1):
        print(f"{i}. {est['nombre']} | Edad: {est['edad']} | Promedio: {est['promedio']}")

def mejor_promedio():
    print("\n--- Estudiante con mejor promedio ---")
    if not estudiantes:
        print("No hay estudiantes registrados.")
        return
    mejor = max(estudiantes, key=lambda x: x["promedio"])
    print(f"Mejor estudiante: {mejor['nombre']} - Promedio: {mejor['promedio']}")
def buscar_por_nombre():
    print("\n--- Buscar estudiante por nombre ---")
    nombre = input("Ingrese el nombre a buscar: ")
    encontrados = [e for e in estudiantes if e["nombre"].lower() == nombre.lower()]
    if not encontrados:
        print("No se encontró el estudiante.")
    else:
        for est in encontrados:
            print(f"Encontrado: {est['nombre']} | Edad: {est['edad']} | Promedio: {est['promedio']}")

def eliminar_por_nombre():
    print("\n--- Eliminar estudiante por nombre ---")
    nombre = input("Nombre a eliminar: ")

    for est in estudiantes:
        if est["nombre"].lower() == nombre.lower():
            estudiantes.remove(est)
            print("✔ Estudiante eliminado.")
            return

    print("No se encontró el estudiante.")

while True:
    print("\n========= MENÚ =========")
    print("1. Agregar estudiante")
    print("2. Mostrar estudiantes")
    print("3. Mostrar estudiante con mejor promedio")
    print("4. Buscar por nombre")
    print("5. Eliminar por nombre")
    print("6. Salir")
    print("========================")

    opcion = input("Seleccione una opción: ")

    if opcion == "1":
        agregar_estudiante()
    elif opcion == "2":
        mostrar_estudiantes()
    elif opcion == "3":
        mejor_promedio()
    elif opcion == "4":
        buscar_por_nombre()
    elif opcion == "5":
        eliminar_por_nombre()
    elif opcion == "6":
        print("Saliendo...")
        break
    else:
        print("Opción inválida, intente nuevamente.")
