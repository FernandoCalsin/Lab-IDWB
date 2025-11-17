// Ejercicio03 - Clase Redondeo
class Redondeo {
  constructor(valor) {
    this.numero = valor;
  }
  redondeoAbajo() {
    return Math.floor(this.numero);
  }
  redondeoArriba() {
    return Math.ceil(this.numero);
  }
  redondeoNormal() {
    return Math.round(this.numero);
  }  toString() {
    return `Redondeo hacia abajo: ${this.redondeoAbajo()}
    Redondeo hacia arriba: ${this.redondeoArriba()}
    Redondeo normal: ${this.redondeoNormal()}`;
  }
}
function ejecutar3() {
  let entrada = prompt("Ingrese precio del producto en decimal:");
  let numero = parseFloat(entrada);

  if (isNaN(numero)) {
    alert("Error: Por favor, ingrese un valor numérico válido.");
    return;
  }
  const resultado = new Redondeo(numero);
  document.getElementById("resultado3").textContent = resultado.toString();
}
// Ejercicio04 - Aleatorio entre min y max
function generarAleatorioEntero(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ejecutar4() {
  let entradaMin = prompt("Ingrese mínimo:");
  let entradaMax = prompt("Ingrese máximo:");
  let min = parseFloat(entradaMin);
  let max = parseFloat(entradaMax);

  if (isNaN(min) || isNaN(max)) {
    alert("Error: Ingrese valores numéricos válidos.");
    return;
  }
  let numeroAleatorio = generarAleatorioEntero(min, max);
  document.getElementById("resultado4").textContent =
    `Número aleatorio generado: ${numeroAleatorio}`;
}
// Ejercicio05
function ejecutar5() {
  let dado1 = generarAleatorioEntero(1, 6);
  let dado2 = generarAleatorioEntero(1, 6);
  document.getElementById("resultado5").textContent =
    `Dado 1: ${dado1}
    Dado 2: ${dado2}`;
}
// Ejercicio06
function ejecutar6() {
  let numeroUsuario = prompt("Ingrese número al que se le sacará raíz y potencia:");
  let numero = parseFloat(numeroUsuario);
  if (isNaN(numero)) {
    alert("Error: Ingrese un valor numérico válido.");
    return;
  }
  let cuadrado = Math.pow(numero, 2);
  let cubo = Math.pow(numero, 3);
  let raiz = Math.sqrt(numero);
  document.getElementById("resultado6").textContent =
    `El cuadrado de ${numero} es ${cuadrado}
    El cubo de ${numero} es ${cubo}
    La raíz de ${numero} es ${raiz}`;
}
// Ejercicio07
const PI = 3.1416;
function ejecutar7(){
  let usuario = prompt("Ingrese valor: 45G (grados) o 1R (radianes)");
  let numero = parseFloat(usuario.slice(0, -1));
  let simbolo = usuario.charAt(usuario.length - 1);
  switch (simbolo.toUpperCase()) {
    case 'G':
      document.getElementById("resultado7").textContent = `
      El grado ${numero} transformado a radianes es ${gradosARadianes(numero)}`;
      break;
    case 'R':
      document.getElementById("resultado7").textContent = `
      El radian ${numero} transformado a grados es ${radianesAGrados(numero)}`;
      break;
    default:
      document.getElementById("resultado7").textContent = `
      Dato ingresado no válido. Ingrese solo grados (G) o radianes (R).`;
  }
}
function gradosARadianes(grados) {
  return grados * (PI / 180);
}
function radianesAGrados(radianes) {
  return radianes * (180 / PI);
}
// Ejercicio08
function ejecutar8() {
  let contraseña = "";
  for (let i = 0; i < 6; i++) {
    let aleatorio = Math.floor(Math.random() * 10);
    contraseña += aleatorio;
  }
  document.getElementById("resultado8").textContent =
    `Contraseña generada: ${contraseña}`;
}
// Ejercicio09
function ejecutar9() {
  let x1U=prompt("Ingrese x1:");
  let y1U=prompt("Ingrese y1:");
  let x2U=prompt("Ingrese x2:");
  let y2U=prompt("Ingrese y2:");
  let x1=parseFloat(x1U);
  let y1=parseFloat(y1U);
  let x2=parseFloat(x2U);
  let y2=parseFloat(y2U);
  if(isNaN(x1)||isNaN(x2)||isNaN(y1)||isNaN(y2)){
    alert("Ingresar numeros");
    return;
  }
  let distanciaPuntos = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  let distanciaOrigin1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
  let distanciaOrigin2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  document.getElementById("resultado9").textContent =`
  Distancia entre los puntos ingresados ${distanciaPuntos} 
  Suma de distancia de los puntos con el origen ${distanciaOrigin1+distanciaOrigin2}`;
}
//Ejercicio10
function ejecutar10(){
  let notas=[8,12,15,15,7];  
  const maximo = Math.max(...notas);  
    let notasNormalizadas = [];
  for(let i=0; i<notas.length; i++){
    const notaNormalizada = notas[i] / maximo; 
    notasNormalizadas.push(notaNormalizada);
  }
  document.getElementById("resultado10").textContent=`
  Calificaciones originales: ${notas}
  Maximo: ${maximo} Notas normalisadas ${notasNormalizadas}`;
 
}

function ejecutar11() {
  class Producto {
    #nombre;
    #precio;
    #stock;
    constructor(nombre, precio, stock) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
    } 
    get nombre() {
      return this.#nombre;
    }
    set nombre(valor) {
      this.#nombre = valor;
    }
    get precio() {
      return this.#precio;
    }
    set precio(valor) {
      valor = Number(valor);
      if (valor > 0) {
        this.#precio = valor;
      } else {
        alert("El precio debe ser mayor a 0");
      }
    }
    get stock() {
      return this.#stock;
    }
    set stock(valor) {
      valor = Number(valor);
      if (valor >= 0) {
        this.#stock = valor;
      } else {
        alert("El stock no puede ser negativo");
      }
    }
    vender(cantidad) {
      cantidad = Number(cantidad);
      if (cantidad <= this.#stock) {
        this.#stock -= cantidad;
        return `Venta realizada. Stock restante: ${this.#stock}`;
      } else {
        return ` No hay suficiente stock. Stock actual: ${this.#stock}`;
      }
    }
  }
  let producto = new Producto("Galletas", 3.50, 10);
  let venta1 = producto.vender(4);
  let venta2 = producto.vender(8);

  document.getElementById("resultado11").textContent = `
Producto: ${producto.nombre}
Precio: ${producto.precio}
Stock actual: ${producto.stock}

${venta1}
${venta2}
  `;
}
//Ejercicio12
function ejecutar12() {
  class Producto {
    #nombre;
    #precio;
    #stock;
    constructor(nombre, precio, stock) {
      this.nombre = nombre;  // Setter
      this.precio = precio;  // Setter
      this.stock = stock;    // Setter
    }
    get nombre() {
      return this.#nombre;
    }
    set nombre(valor) {
      this.#nombre = valor; // ← aquí estaba el error
    }
    get precio() {
      return `$${this.#precio.toFixed(2)}`;
    }
    set precio(valor) {
      valor = Number(valor);
      if (!isNaN(valor) && valor > 0) {
        this.#precio = valor;
      } else {
        alert("Precio inválido. Debe ser un número mayor a 0.");
      }
    }
    get stock() {
      return this.#stock;
    }
    set stock(valor) {
      valor = Number(valor);
      if (!isNaN(valor) && valor >= 0) {
        this.#stock = valor;
      } else {
        alert("El stock no puede ser negativo.");
      }
    }
  }
  let producto1 = new Producto("Chocolate", "12.5", 20);
  let producto2 = new Producto("Caramelos", 4, 50);
  document.getElementById("resultado12").textContent = `
  Producto 1: ${producto1.nombre} - ${producto1.precio} (Stock: ${producto1.stock})
  Producto 2: ${producto2.nombre} - ${producto2.precio} (Stock: ${producto2.stock})
  `;
  document.getElementById("resultado12").textContent = `
Producto: ${producto1.nombre} - Precio: ${producto1.precio} - Stock: ${producto1.stock}
Producto: ${producto2.nombre} - Precio: ${producto2.precio} - Stock: ${producto2.stock}
  `;
}
  //Ejercicio13
  function ejecutar13() {
  class Figura {
    constructor(color) {
      this.color = color;
    }
    mostrarColor() {
      return `El color de la figura es: ${this.color}`;
    }
  }
  class Cuadrado extends Figura {
    constructor(color, lado) {
      super(color);
      this.lado = lado;
    }
    area() {
      return this.lado * this.lado;
    }
  }
  class Triangulo extends Figura {
    constructor(color, base, altura) {
      super(color);
      this.base = base;
      this.altura = altura;
    }
    area() {
      return (this.base * this.altura) / 2;
    }
  }
  let cuadrado = new Cuadrado("Rojo", 4);
  let triangulo = new Triangulo("Azul", 6, 3);

  document.getElementById("resultado13").textContent = `
  ${cuadrado.mostrarColor()} - Área del cuadrado: ${cuadrado.area()}
  ${triangulo.mostrarColor()} - Área del triángulo: ${triangulo.area()}
  `;
}
//Ejericicio14
function ejecutar14() {
  class Usuario {
    constructor(nombre, email) {
      this.nombre = nombre;
      this.email = email;
    }
    mostrarInfo() {
      return `Usuario: ${this.nombre} - Email: ${this.email}`;
    }
  }
  class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
      super(nombre, email);
      this.nivelFidelidad = Number(nivelFidelidad);
    }
    mostrarInfo() {
      return `Cliente: ${this.nombre} - Email: ${this.email} - Fidelidad: ${this.nivelFidelidad}`;
    }
  }
  class Administrador extends Usuario {
    constructor(nombre, email) {
      super(nombre, email);
      this.permisos = ["crear", "editar", "eliminar"];
    }
    mostrarInfo() {
      return `Administrador: ${this.nombre} - Email: ${this.email} - Permisos: ${this.permisos.join(", ")}`;
    }
  }
  let usuarios = [
    new Cliente("Luis", "luis@gmail.com", 4),
    new Cliente("Jose", "jose@gmail.com", 2),
    new Administrador("Carla", "carla@empresa.com")
  ];

  let resultado = "";
  usuarios.forEach(u => {
    resultado += u.mostrarInfo() + "\n";
  });
  document.getElementById("resultado14").textContent = resultado;
}
//Ejericicio15
function ejecutar15() {
  class Usuario {
    constructor(nombre, email) {
      this.nombre = nombre;
      this.email = email;
    }
    mostrarInfo() {
      return `Usuario: ${this.nombre} - Email: ${this.email}`;
    }
  }
  class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
      super(nombre, email);
      this.nivelFidelidad = nivelFidelidad;
    }
    mostrarInfo() {
      return `Cliente: ${this.nombre} - Email: ${this.email} - Fidelidad: ${this.nivelFidelidad}`;
    }
  }
  class Administrador extends Usuario {
    constructor(nombre, email) {
      super(nombre, email);
      this.permisos = ["crear", "editar", "eliminar"];
    }
    mostrarInfo() {
      return `Administrador: ${this.nombre} - Email: ${this.email} - Permisos: ${this.permisos.join(", ")}`;
    }
  }
  let usuarios = [
    new Cliente("Ana", "ana@gmail.com", 3),
    new Administrador("Marco", "marco@empresa.com"),
    new Cliente("Sofía", "sofia@hotmail.com", 5),
    new Administrador("Luis", "luis@admin.com")
  ];
  let resultado = "";
  usuarios.forEach(u => {
    resultado += u.mostrarInfo() + "\n";
  });
  document.getElementById("resultado15").textContent = resultado;
}
//Ejercicio16
function ejecutar16() {
  class Empleado {
    constructor(nombre, sueldoBase) {
      this.nombre = nombre;
      this.sueldoBase = sueldoBase;
    }
  }
  class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
      super(nombre, sueldoBase);
      this.lenguaje = lenguaje;
    }
    calcularSueldo() {
      return this.sueldoBase + (this.sueldoBase * 0.10); // Bono 10%
    }
  }
  class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje) {
      super(nombre, sueldoBase, lenguaje);
    }
    calcularSueldo() {    
      let sueldoProgramador = super.calcularSueldo();
      return sueldoProgramador + (this.sueldoBase * 0.25);
    }
  }
  let empleado1 = new Programador("Luis", 2000, "JavaScript");
  let empleado2 = new ProgramadorSenior("Ana", 3000, "Python");

  document.getElementById("resultado16").textContent = `
  Programador:
  Nombre: ${empleado1.nombre}
  Lenguaje: ${empleado1.lenguaje}
  Sueldo Total: ${empleado1.calcularSueldo()}

  Programador Senior:
  Nombre: ${empleado2.nombre}
  Lenguaje: ${empleado2.lenguaje}
  Sueldo Total: ${empleado2.calcularSueldo()}
  `;
}
//Ejercicio17
function ejecutar17() {
  class Cuenta {
    #saldo;
    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }
    depositar(monto) {
      this.#saldo += monto;
    }
    retirar(monto) { 
      if (monto <= this.#saldo) {
        this.#saldo -= monto;
      } else {
        console.log("Fondos insuficientes");
      }
    }
    transferir(monto, otraCuenta) {
      this.retirar(monto);
      otraCuenta.depositar(monto);
    }
    getSaldo() {
      return this.#saldo;
    }
  }
  class CuentaAhorro extends Cuenta {
    retirar(monto) {      
      if (monto > this.getSaldo()) {
        console.log("No puedes retirar, saldo insuficiente (Ahorro)");
        return;
      }
      super.retirar(monto);
    }
  }
  class CuentaCorriente extends Cuenta {
    constructor(saldoInicial, limite) {
      super(saldoInicial);
      this.limite = limite;
    }
    retirar(monto) {     
      if (monto > this.getSaldo() + this.limite) {
        console.log("Límite de sobregiro excedido");
        return;
      }
      super.retirar(monto);
    }
  }
  let ahorro = new CuentaAhorro(100);
  let corriente = new CuentaCorriente(50, 100);
  ahorro.retirar(150);
  corriente.retirar(120);
  ahorro.depositar(50);
  ahorro.transferir(50, corriente);
  document.getElementById("resultado17").textContent = `
  Saldo Cuenta Ahorro: ${ahorro.getSaldo()}
  Saldo Cuenta Corriente: ${corriente.getSaldo()}
  `;
}
//Ejercicio18
function ejecutar18() {
  class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  class Carrito {
    constructor() {
      this.productos = [];
    }
    agregarProducto(producto) {
      this.productos.push(producto);
    }
    calcularTotal() {
      return this.productos.reduce((total, p) => total + p.precio, 0);
    }
    mostrarResumen() {
      return this.productos.map(p => `${p.nombre} - $${p.precio}`).join("\n");
    }
  }
  let carrito = new Carrito();
  carrito.agregarProducto(new Producto("Laptop", 1200));
  carrito.agregarProducto(new Producto("Mouse", 50));
  carrito.agregarProducto(new Producto("Teclado", 80));

  document.getElementById("resultado18").textContent = `
  Productos:
  ${carrito.mostrarResumen()}

  Total a pagar: $${carrito.calcularTotal()}
  `;
}
//Ejercicio19
function ejecutar19() {
  class Notificacion {
    enviar() {
      console.log("Enviando notificación...");
    }
  }
  class Email extends Notificacion {
    enviar() {
      return "Enviando correo electrónico...";
    }
  }
  class SMS extends Notificacion {
    enviar() {
      return "Enviando mensaje SMS...";
    }
  }
  class Push extends Notificacion {
    enviar() {
      return "Enviando notificación Push...";
    }
  }
  function procesarNotificaciones(lista) {
    let resultado = "";
    lista.forEach(n => {
      resultado += n.enviar() + "\n";
    });
    return resultado;
  }
  let notificaciones = [
    new Email(),
    new SMS(),
    new Push(),
    new Email(),
  ];
  document.getElementById("resultado19").textContent = procesarNotificaciones(notificaciones);
}
  