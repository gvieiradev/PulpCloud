const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./../models/user');
const app = express();

app.post('/register', function(req,res){
    let body = req.body;
    let {username,email,password,phone,rol} = body;

    let user = new User({
        username,
        email,
        password:bcrypt.hashSync(password, 10),
        rol
    });

    user.save((err, userDB)=>{
        if (err) {
            return res.status(400).json({
               ok: false,
               err,
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        });
    })
});
module.exports=app;