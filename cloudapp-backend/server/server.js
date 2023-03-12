require('./config/config');
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path')

//parse apllication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//parse application/json
app.use(bodyParser.json())

//configuracion global de rutas
app.use(require('./routes/index'));

let renderHTML = path.resolve(__dirname, '../public/index.html');
app.get('/', function (req, res){
    res.sendFile(renderHTML)
})

//conexion a BDD
mongoose.connect(
    process.env.URLDB, {useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=>{
        console.log('DATABASE CONNECTED');
    })
    .catch((err) => {
        // Catch any potential error
        console.log(mongoose.version);
        console.log("Unable to connect to MongoDB. Error: " + err);
      });
// mongoose.connect('mongodb+srv://inggabrielvieira:pulp.cloud@clustercloudapp.av8hux6.mongodb.net/?retryWrites=true&w=majority', () => {
//     console.log('DATABASE ONLINE')
// })

app.listen(process.env.PORT, ()=>{
    console.log('LISTEN PORT 3000')
})