import {getHeroeById} from './bases/08-importar';

// console.log(getHeroeById(2));

// const promesa = new Promise( (resolve, reject) => {

//     const p1 = getHeroeById(6);
//     if( p1 ){
//         resolve (p1);
//     }else{
//         reject ('No se pudo encontrar el heroe');
//     }


// } );

// promesa.then( (heroe) => {

//     console.log('heroe encontrado: ',heroe)

// } );


const obtenerHeroePorId = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const p1 = getHeroeById(id);
            if( p1 ){
                resolve (p1);
            }else{
                reject ('No se pudo encontrar el heroe');
            }
        
        }, 2000)
    
    } );
}

obtenerHeroePorId(2)
    .then (console.log)
    .catch (console.warn);

