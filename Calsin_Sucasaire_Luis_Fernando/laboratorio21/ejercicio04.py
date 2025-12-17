"""Crea un programa que permita gestionar libros en una biblioteca usando clases y objetos.
De los libros me interesa título, autor, año y ver si está disponible. Cada libro se debe poder prestar
 (si está disponible) y devolver (si no está disponible). Crear la clase biblioteca que administre los libros, 
 debe manejar un conjunto de libros y se debe poder agregar libro nuevo, listar libros para mostrar todos los libros con su disponibilidad, 
 buscar por autor y prestar libro (busca el libro por título y lo presta si está disponible).
 Crear una clase Libro Digital que herede de Libro y tenga propiedades adicionales de formato (ej: "PDF", "EPUB") y tamañoMB. 
 Sobrescribir el método prestar para que siempre esté disponible (los libros digitales no se prestan físicamente).
 Crear al menos 3 libros físicos y 2 libros digitales, agregarlos a la biblioteca y probar los métodos:
• Listar todos los libros
• Prestar un libro físico
• Prestar un libro digital 5 veces
• Intentar prestar un libro ya prestado
• Buscar libros por autor"""

class Libro:
    def __init__(self, titulo, autor, anio):
        self.titulo = titulo
        self.autor = autor
        self.anio = anio
        self.disponible = True
        
    def prestar(self):
        if self.disponible:
            self.disponible = False
            print(f" '{self.titulo}' ha sido prestado")
        else:
            print(f" '{self.titulo}' no está disponible")

    def devolver(self):
        if not self.disponible:
            self.disponible = True
            print(f"'{self.titulo}' ha sido devuelto")
        else:
            print(f"'{self.titulo}' ya estaba disponible")

    def __str__(self):
        estado = "Disponible" if self.disponible else "Prestado"
        return f"{self.titulo} ({self.autor}, {self.anio}) - {estado}"

class LibroDigital(Libro):
    def __init__(self, titulo, autor, anio, formato, tamanoMB):
        super().__init__(titulo, autor, anio)
        self.formato = formato
        self.tamanoMB = tamanoMB

    def prestar(self):
        print(f" '{self.titulo}' en formato {self.formato} ({self.tamanoMB} MB) está disponible para descarga")

    def __str__(self):
        return f"{self.titulo} ({self.autor}, {self.anio}) - Digital {self.formato}, {self.tamanoMB} MB"

class Biblioteca:
    def __init__(self):
        self.libros = []

    def agregar_libro(self, libro):
        self.libros.append(libro)

    def listar_libros(self):
        print("\nListado de libros en la biblioteca:")
        for libro in self.libros:
            print(" -", libro)

    def buscar_por_autor(self, autor):
        print(f"\nBuscando libros de {autor}:")
        encontrados = [libro for libro in self.libros if libro.autor.lower() == autor.lower()]
        if encontrados:
            for libro in encontrados:
                print(" -", libro)
        else:
            print("No se encontraron libros de ese autor")

    def prestar_libro(self, titulo):
        for libro in self.libros:
            if libro.titulo.lower() == titulo.lower():
                libro.prestar()
                return
        print(f"No se encontró el libro '{titulo}'")


if __name__ == "__main__":
    biblioteca = Biblioteca()

    libro1 = Libro("Cien años de soledad", "Gabriel García Márquez", 1967)
    libro2 = Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605)
    libro3 = Libro("La ciudad y los perros", "Mario Vargas Llosa", 1963)

    libro4 = LibroDigital("Python para todos", "Charles Severance", 2016, "PDF", 5)
    libro5 = LibroDigital("Clean Code", "Robert C. Martin", 2008, "EPUB", 3)
    
    for l in [libro1, libro2, libro3, libro4, libro5]:
        biblioteca.agregar_libro(l)

    biblioteca.listar_libros()

    biblioteca.prestar_libro("Cien años de soledad")

    biblioteca.prestar_libro("Cien años de soledad")

    for _ in range(5):
        biblioteca.prestar_libro("Python para todos")

    biblioteca.buscar_por_autor("Miguel de Cervantes")
