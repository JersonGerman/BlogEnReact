// Funciones 

function saludar( nombre ){
    return `Hola ${nombre}`;
}

// saludar = 45;

console.log(saludar('jerson'));

const saludar2 = ( nombre ) => {
    return `Hola ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola ${nombre}`;

// console.log(saludar('jerson'));
console.log(saludar2('jerson'));
console.log(saludar3('Jerson'));


const obtenerAlumno = () => (
    {
        codigoAlumno: '78965412',
        nombreAlumno: 'Jerson'
    }
)

console.log(obtenerAlumno());

