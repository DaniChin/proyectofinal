/**
 * Declaracion de variables del formulario
 */

const formulario = document.getElementById("formulario")

const userName = document.getElementById("userName")
const userEmail = document.getElementById("userEmail")
const umensaje = document.getElementById("mensaje")


// variable para la exprsion regular
const reguserName = /^[A-Za-zÑñAae\s]+$/;
const reguserEmail = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;

formulario.addEventListener("submit", (e) => {
     e.preventDefault()
//console.log(mensaje.value);

console.log(mensaje.value.length);
//validar nombre
if (!userName.value.trim()||!reguserName.test(userName.value)) {
    alert("Nombre invalido")
}

//validar email
if (!userEmail.value.trim()||!reguserEmail.test(userEmail.value)) {
    alert("Email invalido")
}
//validar mensaje
if(mensaje.value.length <1 && + mensaje.value){
    alert("no se permite ningun campo vacio");
}
console.log("los datos fueron enviados");
});