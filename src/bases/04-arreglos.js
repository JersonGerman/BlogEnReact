// import heroes from "./data/heroes";


// console.log(heroes);

// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => heroe.id === id);
// };

// console.log(getHeroeById(2));

// // const getHeroesPorPropietario = ( )


//Arreglos


let arregloGenero = new Array(2);
arregloGenero[0] = 'masculino';
arregloGenero[1] = 'femenino';

arregloGenero.push('genero 3');

// arregloGenero.push('Masculino');
// arregloGenero.push('Femenino');

console.log(arregloGenero);
console.log(`Indice 2: ${arregloGenero[2]}`);

//2da forma
let arregloAnimales = ['gato', 'perro', 'león'];
arregloAnimales.push('mono');
console.log('arreglo animales',arregloAnimales);

let arregloAnimales2 = [...arregloAnimales];
console.log('arregloAnimales2',arregloAnimales2);

let arregloAnimales3 = ['tortuga', 'gallo']

const arregloAnimales4 = arregloAnimales2.concat(arregloAnimales3);
console.log('arregloAnimales4',arregloAnimales4);



