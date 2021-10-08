//TEMPLATE strings

const nombre = 'Jerson';
const apellido = 'German';

console.log(nombre + ' ' + apellido);

const nombreCompleto = `${nombre} ${apellido} Taipe`;
console.log(nombreCompleto);

function obtenerSaludo(miNombre){
     const saludo = `Hola ${miNombre}`;

     return saludo;
}

console.log(obtenerSaludo(nombreCompleto));
