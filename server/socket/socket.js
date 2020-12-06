const {io} = require('./server');

// Escuchando front end
io.on('connection', (client)=>{
    console.log('Usuario conectado');

    client.emit('sendMessage', {
        user: 'admin',
        message: 'Hola cliente!'
    });

    client.on('disconnect', ()=>{
        console.log('Se fue :\'(');
    })

    client.on('mensaje', (data, callback)=>{

        if(data.user){
            callback('Ok polishaa!!!!');
        }else{
            callback('Todo malio sal');
        }
    })
})
