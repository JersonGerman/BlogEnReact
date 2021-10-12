const activo = true;

// 1era forma,
// let mensaje = "";
// if(activo){
//     mensaje = "Activo";
// }else{
//     mensaje = "Inactivo";
// }

// 2da forma
// const mensaje = (activo) ? "Activo":"Inactivo";

// 3era forma
const mensaje = activo && "Activo";

console.log("mensaje", mensaje);







