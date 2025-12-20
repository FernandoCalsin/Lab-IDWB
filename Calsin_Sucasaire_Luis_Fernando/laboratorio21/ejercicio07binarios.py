def copiar_binario(origen, destino):
    try:
        with open(origen, "rb") as f_origen:
            contenido = f_origen.read()
        with open(destino, "wb") as f_destino:
            f_destino.write(contenido)
        print(f"Archivo binario copiado: {origen} → {destino}")
    except FileNotFoundError:
        print(f"Error: el archivo {origen} no existe.")
    except Exception as e:
        print(f"Ocurrió un error: {e}")

copiar_binario(
    "C:/git-Visual/Lab-IDWB/Calsin_Sucasaire_Luis_Fernando/laboratorio21/imagen.jpg",
    "C:/git-Visual/Lab-IDWB/Calsin_Sucasaire_Luis_Fernando/laboratorio21/imagen_copia.jpg"
)