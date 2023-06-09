const btnRegistro=document.getElementById('btn-registro');
const cuentas=[];

btnRegistro.addEventListener('click',(e)=>{
        e.preventDefault();

        const nombre=document.getElementById('nombre'),
        apellido=document.getElementById('apellido'),
        dni=document.getElementById('dni'),
        email=document.getElementById('email'),
        user=document.getElementById('user'),
        password=document.getElementById('password'),
        pin=document.getElementById('pin');


        if ( nombre.value === '' || apellido.value === '' || dni.value === '' || email.value === '' || user.value === '' || password.value === '' || pin.value === '') {
            return alert('Por favor, ingrese los datos');
        }

        //agregar cuenta
        cuentas.push(
            {
            nombre:nombre.value,
            apellido:apellido.value,
            dni:dni.value,
            email:email.value,
            user:user.value,
            password:password.value,
            pin:pin.value,
        });
        console.log(cuentas)
        cuentas.forEach((e)=>console.log(e))
    })
    
    
    



  