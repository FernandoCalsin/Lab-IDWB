"""Simular el comportamiento de un programa que realiza 3 consultas a una base de datos remota, 
cada una con un tiempo de respuesta variable entre 1 y 5 segundos. 
Se quiere comparar la concurrencia usando hilos, tareas asíncronas y procesos"""
#Versión con procesos (multiprocessing) procesos
import multiprocessing
import time
import random

def consulta_proceso(nombre):
    tiempo = random.randint(1, 5)
    print(f"{nombre} iniciada (espera {tiempo}s)...")
    time.sleep(tiempo)
    print(f"{nombre} completada en {tiempo}s")

def usar_procesos():
    procesos = []
    for i in range(1, 4):
        p = multiprocessing.Process(target=consulta_proceso, args=(f"Consulta {i}",))
        procesos.append(p)
        p.start()
    for p in procesos:
        p.join()

if __name__ == "__main__":
    print("=== Ejecución con procesos ===")
    usar_procesos()
