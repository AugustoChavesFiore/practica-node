const formulario= document.getElementById('incioSesion');
import cuentas from "./registro";
// const  cuenta=[
//     {
//         email:'augustochavesfiore@gmail.com',
//         user:'augusto',
//         password:'password'
//     },
//     {
//         email:'garciafabianemmanuel@gmail.com',
//         user:'fabian',
//         password:'password'
//     },
//     {
//         email:'canepamariajose95@gmail.com',
//         user:'majo',
//         password:'password'
//     },
    

// ]
const cuenta=cuentas;
const $form = document.querySelector('form')


formulario.addEventListener('click',(e)=>{
    
    let email=document.getElementById('email').value;
    let user=document.getElementById('user').value;
    let password=document.getElementById('password').value;
    const validacion=  cuenta.find(e=>email===e.email && user===e.user && password===e.password);     
    if(!validacion){
        alert("Cuenta incorrecta")
        return
    } 
    alert('dentro');
    $form.setAttribute('action','consulta.html')
        
})
cuenta.forEach((e)=>console.log(e))

console.log(email.value);
console.log(user.value);
console.log(password.value);
