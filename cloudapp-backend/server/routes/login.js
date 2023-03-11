const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./../models/user');
const app = express();

app.post('/login',function (req,res){
    let body = req.body;

    User.findOne({email:body.email}, (erro, userDB)=>{
        if(erro){
            return res.status(500).json({
                ok:false,
                err:erro
            });
        }

        if (!userDB){
            return res.status(400).json({
                ok:false,
                err:{message:'User or password invalid'}
            });
        }

        if (!bcrypt.compareSync(body.password, userDB.password)){
            return res.status(400).json({
                ok:false,
                err:{message:'User or password invalid'}
            });
        }

        let token = jwt.sign({
            user:userDB,
        }, 
        process.env.SEED_AUTENTICACION,
        {
            expiresIN: process.env.CADUCIDAD_TOKEN
        })
        res.json({
            ok:true,
            user:userDB,
            token,
        })
    })
})
module.exports = app;