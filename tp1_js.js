// Datos simulados

const productos = [  
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },  
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },  
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },  
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }  
]; 

// Parte 1: Acceso a elementos y recorrido de arrays 

// 1- Acceder a propiedades individuales: Mostrá en la consola el nombre del primer producto de la lista. 
console.log(productos[0].nombre);

// 2- Recorrido con for...of: Usá un bucle for...of para mostrar en consola el nombre y el precio de cada producto. Formato sugerido: "Producto: Remera - Precio: $1500" 
for (const producto of productos) {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}

// 3- Recorrido con .forEach(): Repetí el ejercicio anterior, pero usando el método .forEach() en lugar del bucle tradicional. 
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});



// Parte 2: Métodos de transformación y filtrado 

/* 4. Obtener solo los nombres con .map(): Creá un nuevo array que contenga únicamente los nombres de los productos. 
Mostralo en consola. 
Resultado esperado: ["Remera", "Pantalón", "Zapatillas", "Gorra", 
"Campera"] */

const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);


// 5. Filtrar por categoría con .filter(): Creá un nuevo array que contenga solo los productos cuya categoría sea "Ropa". Mostrar en consola.

const ropaProductos = productos.filter(producto => producto.categoria === "Ropa");
console.log(ropaProductos);

// 6. Filtrar por precio con .filter(): Creá un array que contenga todos los productos cuyo precio sea mayor a $3000. 

const productosCaros = productos.filter(producto => producto.precio > 3000);
console.log(productosCaros);


// 7. Buscar un producto específico con .find(): Usá el método .find() para encontrar el objeto que tenga como nombre "Gorra". Mostralo completo en consola. 

const gorraProducto = productos.find(producto => producto.nombre === "Gorra");
console.log(gorraProducto);



// Parte 3: Métodos de validación

//8. Verificar con .some(): Usá .some() para comprobar si existe algún producto con un precio mayor a $10.000. Mostrá el resultado (true o false). 
console.log(productos.some(producto => producto.precio > 10000));


// 9. Verificar con .every(): Usá .every() para saber si todos los productos cuestan más de $1000. Mostrá el resultado. 
console.log(productos.every(producto => producto.precio > 1000));


//10. Verificar existencia con .includes(): Usando el array de nombres creado en el punto 4, comprobá si contiene el nombre "Campera". 
console.log(nombresProductos.includes("Campera"));

