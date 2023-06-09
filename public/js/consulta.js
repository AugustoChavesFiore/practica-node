const vehiculos = [
    {
        titular: 'Garcia Fabian',
        dni:'38540540',
        patente: 'AB123CD',
        estado: 'NO POSEE DEUDA'
    },
    {
        titular:'Canepa Maria Jose' ,
        dni: '37683989',
        patente: 'AC123BC',
        estado:'POSEA DEUDA'
    },
    {
        titular:'Augusto Chaves',
        dni:'39606339',
        patente:'A016MAL',
        estado:'NO POSEE DEUDA'
    },
    
]
const formulario = document.getElementById('formulario_registro'); 
const limpiar= document.getElementById("limpiar");

  const vehiculoLista = document.getElementById('vehiculo-lista');
    formulario.onsubmit = (e) => {
        e.preventDefault(); 
        const vehiculo = document.getElementById('dominioVehiculo'); 
        const vehiculoTexto = vehiculo.value; 
        vehiculo.value = ''; 
       
       let asd= vehiculos.find(i => vehiculoTexto===i.dni || vehiculoTexto===i.patente);

        if (!asd) {
            vehiculoLista.innerText=('Vehiculo no encontrado');
            return
        }
        
        vehiculoLista.innerText=(`
        Vehiculo con dominio: ${asd.patente} Estado: ${asd.estado}`);
    }


    limpiar.addEventListener("click",()=>{
        vehiculoLista.innerText = '';
    })
