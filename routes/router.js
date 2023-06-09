const express=require('express');
const router=express.Router();
const conexion=require('../database/db');

const authControllers=require('../controllers/authControllers');

router.get('/',(req,res)=>{
    
    res.render('index.ejs');
});
router.get('/login',(req,res)=>{
    res.render('login.ejs');
});
router.get('/registro',(req,res)=>{
    res.render('registro.ejs');
});

//controller

router.post('/registro',authControllers.registro);
router.post('/login',authControllers.login);



module.exports=router