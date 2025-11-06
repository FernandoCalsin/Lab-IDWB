//Ejercicio04
function filtrarYTransformar(arr){
    let filArreglo=arr;
    for(let i=filArreglo.length-1;i>=0;i--){
        if(arr[i]<0){
            arr.splice(i,1);
        }
    }
    for(let i=0;i<filArreglo.length;i++){
        filArreglo[i]=Math.pow(filArreglo[i],2);
    }
    let suma=0;
    filArreglo.forEach(element => {
        suma+=element;});
    return suma;
}
function ejecutar01(){
    let numerosArreglo=[];
    for(let i=0;i<5;i++){
        let numeroIngresar=parseInt(prompt(`Ingrese el numero ${i+1}: `))
        if(isNaN(numeroIngresar)){
            alert("Ingrese solo numeros");
            i--;
            continue;
        }else{
            numerosArreglo.push(numeroIngresar);            
        }
    }
    let sumaTotal=filtrarYTransformar(numerosArreglo);
    alert(`La suma total quitando negativos y elevando al cuadrado del arreglo ingresado es: ${sumaTotal}`);
}
//Ejercicio05
function redondearPalabras(texto){
    let arregloPalabra=texto.split(" ");
    arregloPalabra.sort();
    let arregloEnMayuscula=arregloPalabra.map(palabra=>palabra.toUpperCase());
    return arregloEnMayuscula;
}
function ejecutar02(){
    let texto=prompt("Ingrese texto");
    let textoArreglo=redondearPalabras(texto);
    alert(textoArreglo);
}
//Ejercicio06
function eliminarDuplicados(nombres) {
    let conjunto = new Set(nombres);
    return [...conjunto];
}

function ejecutar06() {
    let entrada = prompt("Ingrese nombres separados por coma (por ejemplo: Ana, Juan, Ana, Luis, Pedro, Juan)");
    let nombres = entrada.split(",").map(n => n.trim());
    let sinDuplicados = eliminarDuplicados(nombres);
    alert("Nombres sin duplicados:\n" + sinDuplicados.join(", "));
}


// Ejercicio 07
function tieneDuplicados(arr) {
    let conjunto = new Set(arr);
    return conjunto.size !== arr.length;
}
function ejecutar07() {
    let arr = prompt("Ingrese números separados por coma:").split(",").map(Number);
    alert(tieneDuplicados(arr) ? "Sí hay duplicados" : "No hay duplicados");
}

// Ejercicio 08
function calcularTotalCompra(map, lista) {
    let total = 0;
    lista.forEach(prod => {
        if (map.has(prod)) total += map.get(prod);
    });
    return total;
}
function ejecutar08() {
    let productos = new Map([
        ["pan", 2.5],
        ["leche", 4.2],
        ["huevo", 0.8],
        ["queso", 6.5]
    ]);
    let lista = prompt("Ingrese productos separados por coma (ejemplo: pan,queso)").split(",");
    let total = calcularTotalCompra(productos, lista);
    alert(`El total de su compra es: ${total.toFixed(2)}`);
}

// Ejercicio 09
function contarPalabras(texto) {
    let palabras = texto.toLowerCase().split(" ");
    let mapa = new Map();
    palabras.forEach(p => mapa.set(p, (mapa.get(p) || 0) + 1));
    return mapa;
}
function ejecutar09() {
    let texto = prompt("Ingrese un texto:");
    let resultado = contarPalabras(texto);
    let salida = "";
    resultado.forEach((v, k) => salida += `${k}: ${v}\n`);
    alert("Conteo de palabras:\n" + salida);
}

// Ejercicio 10
function invertirMap(map) {
    let nuevo = new Map();
    map.forEach((v, k) => nuevo.set(v, k));
    return nuevo;
}
function ejecutar10() {
    let capitales = new Map([
        ["Perú", "Lima"],
        ["Chile", "Santiago"],
        ["Argentina", "Buenos Aires"]
    ]);
    let invertido = invertirMap(capitales);
    let salida = "";
    invertido.forEach((v, k) => salida += `${k} => ${v}\n`);
    alert("Mapa invertido:\n" + salida);
}

// Ejercicio 11
function ejecutar11() {
    let auto = {
        marca: prompt("Marca del auto:"),
        modelo: prompt("Modelo del auto:"),
        año: prompt("Año del auto:"),
        detalles() {
            return `Auto ${this.marca} ${this.modelo} (${this.año})`;
        }
    };
    alert(auto.detalles());
}

// Ejercicio 12
function contarLetras(texto) {
    let conteo = {};
    texto.toLowerCase().split("").forEach(letra => {
        if (/[a-záéíóúüñ]/.test(letra))
            conteo[letra] = (conteo[letra] || 0) + 1;
    });
    return conteo;
}
function ejecutar12() {
    let texto = prompt("Ingrese texto:");
    let resultado = contarLetras(texto);
    let salida = "";
    for (let l in resultado) salida += `${l}: ${resultado[l]}\n`;
    alert("Conteo de letras:\n" + salida);
}

// Ejercicio 13
function combinarCatalogos(tiendaA, tiendaB) {
    let combinado = { ...tiendaA };
    for (let prod in tiendaB) {
        if (combinado.hasOwnProperty(prod)) {
            combinado[prod] = Math.min(combinado[prod], tiendaB[prod]);
        } else {
            combinado[prod] = tiendaB[prod];
        }
    }
    for (let prod in combinado) {
        combinado[prod] = parseFloat(combinado[prod].toFixed(2));
    }
    return combinado;
}
function ejecutar13() {
    let tiendaA = { laptop: 3500.5, mouse: 100.35, teclado: 250.9 };
    let tiendaB = { mouse: 95.2, monitor: 720.457, teclado: 260.1 };
    let resultado = combinarCatalogos(tiendaA, tiendaB);
    let salida = "";
    for (let p in resultado) salida += `${p}: ${resultado[p]}\n`;
    alert("Catálogo combinado:\n" + salida);
}
// Ejercicio 14
function gestionarEmpleados(empleados) {
    let mapa = new Map();

    empleados.forEach(emp => {
        if (!mapa.has(emp.area)) {
            mapa.set(emp.area, { empleados: [], totalSalario: 0 });
        }
        let area = mapa.get(emp.area);
        area.empleados.push(emp.nombre);
        area.totalSalario += emp.salario;
    });

    let resultado = {};
    mapa.forEach((val, key) => {
        let promedio = val.totalSalario / val.empleados.length;
        resultado[key] = {
            empleados: val.empleados,
            promedio: promedio
        };
    });
    return resultado;
}
function ejecutar14() {
    const listaEmpleados = [
        { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
        { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
        { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
        { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
    ];

    const resultado = gestionarEmpleados(listaEmpleados);
    let salida = "";
    for (let area in resultado) {
        salida += `${area}:\n  Empleados: ${resultado[area].empleados.join(", ")}\n  Promedio: ${resultado[area].promedio}\n\n`;
    }
    alert("Gestión de empleados:\n" + salida);
}
