//importamos
import heroes from "../data/heroes";

// console.log(heroes);

//Obtiene el parámetro dado
export const getHeroeById = (id) => {
    return heroes.find( (item) => item.id === id);
}

// console.log(getHeroeById(2));

//Obtiene todas las coincidencias
export const getHeoresPorPropietario = ( propietario) => {
    return heroes.filter( (item) => item.propietario === propietario);
}

// console.log(getHeoresPorPropietario( 'DC' ) );