const jwt=require('jsonwebtoken');
const bcryptjs=require('bcryptjs');
const conexion=require('../database/db');
const {promisufy}= require('util');

//metodo para registro
exports.registro=async(req,res)=>{

try {
    const nombreApellido=req.body.nombre;
    const DNI= req.body.dni;
    const email= req.body.email;
    const user= req.body.user;
    const pass= req.body.pass;
    const pin= req.body.pin;
    let passHash=await bcryptjs.hash(pass,10);
    conexion.query('INSERT INTO users SET ?',{nombre_apellido:nombreApellido, usuario:user,dni:DNI,email:email, password:passHash, pin:pin },(error,results)=>{
        if(error){
            console.log(error)}
        else{
            res.render('registro',{
                alert:true,
                alertTitle:'Registration',
                alertMessage:"Registrado",
                alertIcon:'success',
                showConfirmButton:true,
                timer:1500,
                ruta:'login'
            });
        };
    
    })
} catch (error) {
    console.log(error);
    
}
}

exports.login= async(req,res)=>{
    try {
        const user=req.body.user;
        const pass=req.body.pass;
        if (!user||!pass) {console.log('incorrecto')
            res.render('login',{
                alert:true,
                alertTitle:'Advertencia',
                alertMessage:"Ingrese usuario y password",
                alertIcon:'info',
                showConfirmButton:true,
                timer:false,
                ruta:'login'
            });
            
        }else{
            conexion.query('SELECT * FROM users WHERE usuario=?',[user],async(error,results)=>{
                if(results.length==0 || !(await bcryptjs.compare(pass,results[0].password))){
                    console.log('incorrecto');
                    res.render('login',{
                        alert:true,
                        alertTitle:'Advertencia',
                        alertMessage:"usuario o password incorrecto",
                        alertIcon:'info',
                        showConfirmButton:true,
                        timer:false,
                        ruta:'login'
                    });
                }else{
                    // inicio ok
                     res.render('login',{
                        alert:true,
                        alertTitle:'Conexion exitosa',
                        alertMessage:'Login Correcto',
                        alertIcon:'success',
                        showConfirmButton:false,
                        timer:800,
                        ruta:'consultas'  
                     })
                }
            });
        }
    } catch (error) {
        console.log(error);
        
    }
}
