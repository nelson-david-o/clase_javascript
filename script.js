// alert('Hola mundo');

document.write('Soy JavaScript');

// Sentencias
/*
Son construcciones de la sintasis del codigo
*/

// Inserción automatica de punto y coma

// Ejemplo
    /*
    alert('Hola')
    alert('Mundo')
    */


// Variables

// let -> para declarar la variable + mensaje
// Con let controlo que una variable sea unica
// Con var puedo tener varias variables del mismo nombre

let mensaje;
mensaje = 'Hola Mundo'
alert(mensaje)

let mensaje2;
mensaje2 = 'Hola Mundo 2'
alert(mensaje2)

let a = 5;
let b = 6;
let suma = a + b;
console.log('El resultado de la suma es: ' ,suma);

let nombre = 'Roberto';
let nombre2 = nombre;

nombre2 = 'Carlos';
console.log('El nombre uno es: ' ,nombre);
console.log('El nombre dos es: ' ,nombre2);

// Nombrar variables con camel case
nombreUno = 'Roberto';
nombreDos = 'Carlos';

// Nombrar como underscore
nombre_uno = 'Roberto';
nombre_dos = 'Carlos';

// Nombres no comunes
let $ = 1;
let _ = 2;

// No puedes nombrar variables
/*
let 1a = 3;
let primer-nombre = 4;
*/

'use strict'
mensaje = 'Hola Mundo';

// Constantes

const pi = 3.14;
const COLOR_ROJO = '#ffffff';
pi_dos = pi;
pi_dos = 7;
console.log(pi);
console.log(pi_dos);

const id_account = get_id_account(45);

