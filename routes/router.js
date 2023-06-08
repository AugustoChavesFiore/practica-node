const express=require('express');
const router=express.Router();

const conexion=require('../database/db');

router.get('/',(req,res)=>{
    conexion();
    res.render('index.ejs');
});
router.get('/loguin',(req,res)=>{
    res.render('loguin.ejs');
});
router.get('/registro',(req,res)=>{
    res.render('registro.ejs');
});
module.exports=router