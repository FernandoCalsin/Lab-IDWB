#7. Crear un programa que permita Copiar el contenido de un archivo a otro. 
# 2 versiones: una para archivos de texto y otra para archivos binarios
def copiar_texto(origen, destino):
    try:
        with open(origen, "r", encoding="utf-8") as f_origen:
            contenido = f_origen.read()
        with open(destino, "w", encoding="utf-8") as f_destino:
            f_destino.write(contenido)
        print(f"Archivo de texto copiado: {origen} → {destino}")
    except FileNotFoundError:
        print(f"Error: el archivo {origen} no existe.")
    except Exception as e:
        print(f"Ocurrió un error: {e}")

copiar_texto(
    "C:/git-Visual/Lab-IDWB/Calsin_Sucasaire_Luis_Fernando/laboratorio21/entrada.txt",
    "C:/git-Visual/Lab-IDWB/Calsin_Sucasaire_Luis_Fernando/laboratorio21/salida.txt"
)

