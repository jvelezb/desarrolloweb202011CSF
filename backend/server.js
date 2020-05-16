var express = require('express'); //importar express
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;///puerto disponible

var uri = "mongodb+srv://user_web:tvbl6u1m@webapp-pcil7.mongodb.net/test?retryWrites=true&w=majority"

var mongoose = require('mongoose');
mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true});

var db = mongoose.connection;
db.on('error',console.error.bind(console,'error de conexion'));
db.once('openUri',function(){
    console.log("Me conecte a mongodb");
});

var router = express.Router();

router.get('/',function(req,res){
    res.json({
        mensaje: "saludos a mis alumnos"
    });
});

app.use('/',router); //url base de nuestro api que tiene las rutas en el routerglobal.fetch = require('node-fetch');
 
app.listen(port); //abre el puerto de escucha

console.log("sevidor arriba");

