module.exports.chatSockets = function(socketServer){
    let io = require('socket.io')(socketServer, {
        cors: {
            origin: "http://localhost:8000",
            methods: ["GET", "POST"]
        }
    });

    io.sockets.on('connection', function(socket){
        console.log('new connection received', socket.id);

        socket.on('disconnect', function(){
            console.log('socket disconnected!');
        });

        socket.on('join_room', function(data){
            console.log('Joining Request Recived',data);

            socket.join(data.chatroom);

            io.in(data.chatroom).emit('user_joined', data);

        });

        socket.on('send_message', function(data){
            io.in(data.chatroom).emit('recive_message',data);
        })

    });

}