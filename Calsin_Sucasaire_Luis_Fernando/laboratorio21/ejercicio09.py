"""Simular el comportamiento de un programa que realiza 3 consultas a una base de datos remota, 
cada una con un tiempo de respuesta variable entre 1 y 5 segundos. 
Se quiere comparar la concurrencia usando hilos, tareas asíncronas y procesos"""
#Versión con hilos (threading)
import threading
import time
import random

def consulta(nombre):
    tiempo = random.randint(1, 5)
    print(f"{nombre} iniciada (espera {tiempo}s)...")
    time.sleep(tiempo)
    print(f"{nombre} completada en {tiempo}s")

def usar_hilos():
    hilos = []
    for i in range(1, 4):
        t = threading.Thread(target=consulta, args=(f"Consulta {i}",))
        hilos.append(t)
        t.start()
    for t in hilos:
        t.join()

print("=== Ejecución con hilos ===")
usar_hilos()
