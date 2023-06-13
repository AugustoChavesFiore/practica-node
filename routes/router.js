const express=require('express');
const router=express.Router();
const conexion=require('../database/db');

const authControllers=require('../controllers/authControllers');
//views
router.get('/',(req,res)=>{
    
    res.render('index.ejs');
});
router.get('/login',(req,res)=>{
    res.render('login.ejs',{alert:false});
});
router.get('/registro',(req,res)=>{
    res.render('registro.ejs',{alert:false});
});
router.get('/consultas',(req,res)=>{
    res.render('consultas.ejs');
});
router.get('/pagos',(req,res)=>{
    res.render('pagos.ejs');
});
//controller

router.post('/registro',authControllers.registro);
router.post('/login',authControllers.login);



module.exports=router