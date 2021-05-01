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

/*
let mensaje;
mensaje = 'Hola Mundo'
alert(mensaje)

let mensaje2;
mensaje2 = 'Hola Mundo 2'
alert(mensaje2)
*/

/*
let a = 5;
let b = 6;
let suma = a + b;
console.log('El resultado de la suma es: ' ,suma);

let nombre = 'Roberto';
let nombre2 = nombre;

nombre2 = 'Carlos';
console.log('El nombre uno es: ' ,nombre);
console.log('El nombre dos es: ' ,nombre2);
*/

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

const PI = 3.14;
const COLOR_ROJO = '#ffffff';
pi_dos = PI;
pi_dos = 7;
console.log(PI);
console.log(pi_dos);

// const id_account = get_id_account(45);

// Tipos de datos

// Dinámicamente tipado

let mensaje3 = 'Hola';
mensaje3 = 12234;

// Número
let n = 123;
n = 12.456;

// Valores númericos especiales Infinity, -Infinty y NaN

// Infinity: representa el infinito matemático. Es un valor especial que es mayor que cualquier numero

console.log(1 / 0);
console.log(Infinity);

// NaN representa un error de calculo. Es el resultado de una operación matemática incorrecta o indefinida

console.log('no es un número' / 2);

// NaN es pegajoso. Cualquier operación sobre NaN devuelve NaN

console.log('no es un número' / 2 + 5);

// Tipo de datos BigInt



// Valores enteros mayores que (2^53-1) o menor que -(2^53-1) 9.007.199.254.740.991

let numero_grande = 12312432543654657588987n;
console.log(numero_grande);

// Tipo String

let texto = "Hola";
let texto_dos = 'Hola';
let texto_tres = ``; //backticks funcionalidad extendida
let nomb = 'Roberto';
console.log("Hola" ,nomb);
console.log('Hola' ,nomb);
console.log(`Hola` ,nomb);

console.log(`Hola ${nomb}`);

// Tipo Booleano

let verdadero = true;
let falso = false;

let mayor = 4 > 1; //True

// Valor null

// Valor especial que no pertenece a ningún tipo de dato anterior.
// Forma un tipo propio separado que contiene solo el valor null:

let edad = null;
console.log(edad);

// En JS null  NO significa un objeto no existente
// Es solo un valor especial que representa nada, vacío.

// Valor Undefined

// Es un valor especial que no pertence a ningún tipo de dato anterio.
// El significado de undefined es valor no asignado.

//let edad_dos;
//console.log(edad_dos);

// El operador typeof o función typeof(x), devuelve el tipo de dato.
/*
console.log(typeof undefined); // undefined
console.log(typeof 0); // numer
console.log(typeof true); //Boolean
console.log(typeof 10n); // bigint
console.log(typeof "Hola"); //string
console.log(typeof (alert)); //funcion **
console.log(typeof null); // object - ERROR DE JAVASCRIPT
console.log(typeof (Math)); //object
*/

// INteracciones: alert, prompt. confirm

// alert

// prompt

//let nombre_n = prompt('Digite el nombre', 'Hola');
//alert(nombre_n);

//prompt('Digite el nombre');
//prompt('Digite el nombre', '');

// Confirm

//let esHelado = confirm('¿Te gusta el helado?');
//console.log(esHelado); // true si presiona ok y false si presioan cancelar

// Conversión de tipos

// Existen dos tipos de conversiones explícita e implícita

// Convertir a String
let valor = true;
console.log(typeof valor);

valor = String(valor); // true
valor = String(false); // false
valor = String(null); // null
valor = String(undefined); // undefined
console.log(valor); 
console.log(typeof valor);

// Convertir a Número

// Conversiones nUmericas ocurren automaticamente en funciones matemáticas y expresiones

// alert('6' / '2'); // 3

let cadena = '123';
let num_cad = Number(cadena); //123

console.log(Number('hola')); //NaN

/*
TABLA CONVERSION NÚMEROS
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN
*/

// Convertir a Booleano

console.log(Boolean('hola'));

/*
TABLA CONVERSION BOOLEANO
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false

'0' -> true
'  ' -> true
*/

console.log(Boolean(String(0)));
console.log(Boolean(0));

// OPERADORES BÁSICOS

//Operadores unarios y binarios

/*
let x, y, resultado;
x = 5;
y = 2;
*/

//Operadores binarios
/*
resultado = x + y;
resultado = x - y;
resultado = x * y;
resultado = x / y;
resultado = x % y; // mod
resultado = x ** y; // potencia

alert('1' + 2); // 12
alert(1 + '2'); // 12

alert(2 + 2 + '1'); //41
alert('1' + 2 + 2); //122

alert(2 - '1'); //1
alert('6' / '2'); //3
alert('6' / '2a'); //NaN
*/

// Operaciones Unaria +

a = 1;
console.log(+a);

a = -1;
console.log(+a);

console.log(+true);
console.log(+false);
console.log(+NaN);
console.log(+undefined);
console.log(+null);

// Operaciones Unaria -

a = 1;
console.log(-a);

a = -1;
console.log(-a);

console.log(-true);
console.log(-false);

// ASIGNACIONES

a = 2 + 3;
a = b = c = 2 + 3;

c = 2 + 3;
b = c;
a = b;

c = 3 - (a = b + 1);

// MODIFICADORES

a = a +2;

// COMPARACIONES

console.log( 2 > 1); //true
console.log( 2 == 1); //false
console.log(2 != 1); //true

let resu = 2 > 1;

// Comparaciones entre cadenas

console.log('Z' > 'A'); //true
console.log('Show' > 'show'); //false
console.log('casa' > 'casas'); //false
console.log('a' > 'A');
console.log('carro' > 'cerro');

// 1. La letra minúscula es mayor que la mayúscula
// 2. La palabra con más letras es mayor que la de menos letras

// Comparación de diferentes tipos

// Al comparar valores de diferentes tipos, JS convierte los valores a números
// toda comparacion con NaN es falsa


a = 0;
b = '0';

boleano_a = Boolean(a); //false
boleano_b = Boolean(b); //true

console.log(a == b);

console.log('********');
console.log('2' > 1); // true
console.log('01' == 1); //true
console.log(true > 0); //true
console.log(false == 0); //true

//NaN
console.log('**** NaN ****');

console.log('hola' > 0); //false
console/log('hola' < 0); //false
console/log('hola' == 0); //false

// Undefined
console.log('**** Undefined ****');

console.log(undefined > 0); //false
console.log(undefined < 0); //false

// Null
console.log('**** Null ****');

console.log(null > 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true

console.log('**** Null y Undefined == ****');
// el undefined y el null en las comparaciones de igualación no estrictas
// actúan diferente: son iguales entre sí, pero no a ningún otro valor

console.log(null == undefined); //true
console.log(null == 5); //false
console.log(undefined == 5); //false


console.log('**** No diferencia de 0 de falso == ****');

console.log(0 == false); //true
console.log('' == false); //true

// Igualación estricta

console.log(0 === false); //false
console.log(null === undefine); //false
console.log(null == undefined); //true


/*
TABLA CONVERSION NÚMEROS
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN
*/

/*
TABLA CONVERSION BOOLEANO
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false

'0' -> true
'  ' -> true
*/


// SENTENCIA IF