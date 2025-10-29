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
        suma+=element;        
    });
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