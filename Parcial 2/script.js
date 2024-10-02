console.log("JS cargando");

let edad;//declaracion
edad=18//asignacion
let nombre="Juan";//declaro y asigno
console.log("Mi nombre es "+nombre);
nombre=50;
console.log(nombre);

var apellidoPaterno="De la cruz";

console.log("Mi apellido es" + apellidoPaterno);

var preferencia="tacos";

if(true)

{
    let preferencia="pizza"
    console.log(preferencia);
}

console.log(preferencia);

//var se utilñiza para variables globales
//let se ultiliza para variables locales
//que su alcance es limitado a solo un bloque de codigo

const sexo="F";
console.log(sexo);
//sexo="M";// variables de tipo constante no
// permite la asignacion
//de nuevos valores 

//alt+96
//codigo ASCII

let template=`Mi nombre es ${nombre} y
               mi apellido es ${apellidoPaterno}
               y mi edad es ${edad}`;
console.log(template);