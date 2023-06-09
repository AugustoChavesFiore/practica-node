const jwt=require('jsonwebtoken');
const bcryptjs=require('bcryptjs');
const conexion=require('../database/db');
const {promisufy}= require('util');

//metodo para registro
exports.registro=async(req,res)=>{

try {
    const name= req.body.nombre;
    const user= req.body.user;
    const pass= req.body.pass;
    let passHash=await bcryptjs.hash(pass,8);
    conexion.query('INSERT INTO users SET ?',{name:name,user:user , pass:passHash},(error,results)=>{
        if(error){console.log(error)};
        res.redirect('/login');
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
            res.redirect('/login');
            
     
        }else{
            conexion.query('SELECT * FROM users WHERE user=?',[user],async(error,results)=>{
                if(results.length==0|| !(await bcryptjs.compare(pass,results[0].pass))){
                    console.log('incorrecto')
                    res.redirect('/login');
                }else{
                    //inicio ok
                    
                    res.redirect('/consultas');
                    
                    // const id= results[0].id;
                    // cons token= jwt.sign()
                }
            });
        }
    } catch (error) {
        
    }
}