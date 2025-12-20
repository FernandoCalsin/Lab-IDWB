"""Simular el comportamiento de un programa que realiza 3 consultas a una base de datos remota, 
cada una con un tiempo de respuesta variable entre 1 y 5 segundos. 
Se quiere comparar la concurrencia usando hilos, tareas asíncronas y procesos"""
#Versión con async/await (asyncio) tareas asincronas
import asyncio
import random

async def consulta_async(nombre):
    tiempo = random.randint(1, 5)
    print(f"{nombre} iniciada (espera {tiempo}s)...")
    await asyncio.sleep(tiempo)
    print(f"{nombre} completada en {tiempo}s")

async def usar_async():
    tareas = [consulta_async(f"Consulta {i}") for i in range(1, 4)]
    await asyncio.gather(*tareas)

print("=== Ejecución con async/await ===")
asyncio.run(usar_async())
