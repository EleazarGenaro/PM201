// Js del lado del servidor 

console.log("Hola Mundo JS con Node"); 

// Calculo 
let edad1= 12;
let edad2= 34; 

console.log("edad promedio:");
console.log((edad1+edad2)/2);

// medir el tiempo del proceso
console.time("Miproceso");
for(let i = 0; i<1000000; i++){ } 
console.timeEnd("Miproceso");

// Objetos tipo tabla 

let Usuarios = [
    {nombre: "Gena", edad: 23},
    {nombre: "Santi", edad: 22},
    {nombre: "Jony", edad: 22}
];

console.table(Usuarios);