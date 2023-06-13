const express=require('express');
const dotenv=require('dotenv');


const app=express();


//setting
app.set('view engine', 'ejs');
app.set('./views','ejs');
//public
app.use(express.static('public'));
//procesar datos enviados de forms
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//variables de entorno
dotenv.config({path:'./env/.env'});

//llamar al router
app.use('/',require('./routes/router'))




app.listen(5000,()=>{
    console.log(`Servidor corriendo en http://localhost:5000`);
})