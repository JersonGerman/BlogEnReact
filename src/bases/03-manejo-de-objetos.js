// Manejo de objetos

const persona = {
    nombre: 'Jerson',
    apellido: 'Taipe',
    edad: 24,
    email: 'jersontaipemiranda@gmail.com'
};

console.log(persona);

persona.nombre = 'German';

const persona2 = {...persona};

persona2.nombre = 'Jerson2';
persona2.apellido = 'Taipe2';
persona2.telefono = '895665478';
persona2.direcciones = {
   direccionCasa : 'Direccion casa',
   direccionTrabajo : 'Direccion trabajo'
}

console.table(persona);
console.table(persona2);