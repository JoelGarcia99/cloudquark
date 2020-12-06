const bodyParser = require('body-parser');
const express = require('express');
require("dotenv").config();

// Para configurar en servidor con sockets, debemos usar http
let server = http.createServer(app);
module.exports.io = socketIO(server);

require("./server/socket/socket");

const port = process.env.PORT || 3000;

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./server/routes/routes'));

app.listen(port, (err)=>{
    if(err){
        throw new Error("Failed to run server");
    }

    console.log("Listening at port", port);
});