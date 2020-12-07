const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./server/routes/routes'));

// Agregando contenido estático a Node
// const publicPath = path.resolve(__dirname, './public');
// app.use(express.static(publicPath));

// Para configurar en servidor con sockets, debemos usar http
let server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require("./server/socket/socket");


server.listen(port, (err)=>{
    if(err){
        throw new Error("Failed to run server");
    }

    console.log("Listening at port", port);
});