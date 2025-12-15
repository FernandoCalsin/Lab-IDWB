import sys
def obtener_n():
    while True:
        try:
            n_str = input("Ingrese un número N (entero, mayor o igual a 3): ")
            N = int(n_str)
            if N < 3:
                print("Error: N debe ser mayor o igual a 3.")
            else:
                return N
        except ValueError:
            print("Error: La entrada no es un número entero válido.")
def generar_matriz_espiral(N):   
    matriz = [[0] * N for _ in range(N)]
    fila_inicio, fila_fin = 0, N - 1
    col_inicio, col_fin = 0, N - 1
    contador = 1
    limite = N * N
    while contador <= limite:
        if contador <= limite:
            for j in range(col_inicio, col_fin + 1):
                matriz[fila_inicio][j] = contador
                contador += 1
            fila_inicio += 1 
        if contador <= limite:
            for i in range(fila_inicio, fila_fin + 1):
                matriz[i][col_fin] = contador
                contador += 1
            col_fin -= 1   
        if contador <= limite:
            for j in range(col_fin, col_inicio - 1, -1):
                matriz[fila_fin][j] = contador
                contador += 1
            fila_fin -= 1       
        if contador <= limite:
            for i in range(fila_fin, fila_inicio - 1, -1):
                matriz[i][col_inicio] = contador
                contador += 1
            col_inicio += 1            
    return matriz
def imprimir_matriz(matriz):
    print("\nMatriz Espiral generada:") 
    N = len(matriz)
    max_val = N * N
    ancho = len(str(max_val)) + 1     
    for fila in matriz:      
        print("".join(str(num).rjust(ancho) for num in fila))
if __name__ == "__main__":
    N = obtener_n()
    
    matriz_resultante = generar_matriz_espiral(N)
    
    imprimir_matriz(matriz_resultante)