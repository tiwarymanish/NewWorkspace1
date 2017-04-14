var express = require('express');
var app =express();
var server = require('http').createServer(app);
var io  =require('socket.io').listen(server);
var redis = require('redis');
const port = process.env.PORT;
var pub = redis.createClient();
var sub = redis.createClient();
users = [];
connections = [];
arr =[];
usernames = [];


// sub.on('data',function(channel,message){
//   console.log("Message '" + message + "' on channel '" + channel + "' arrived!")
// });


server.listen(8080);

console.log("server running..");

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function(socket){
    connections.push(socket);
    //console.log('connected', connections.length);
      //client.subscribe("user");
   
    socket.on('disconnect', function(){
        users.splice(users.indexOf(socket.username), 1);
     
        connections.splice(connections.indexOf(socket),1);
        //console.log('Disconnected',connections.length);
    });
     socket.on('new user', function(data){
         console.log('data', data);
        //callback(true);
     pub.publish("global",data);
     sub.subscribe("global");
     }
    );
});
