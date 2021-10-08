// Desestructuración

const obtenerPersona    = () => {

    const persona = {
        nombre : 'Jerosn',
        apellido : 'Taipe',
        edad: 33,
        email: 'jerson@gmail.com'
    }

    return persona;

}

const { nombre, edad} = obtenerPersona();

console.log('nombre',nombre);
console.log('edad', edad);

