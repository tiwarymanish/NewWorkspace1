var express = require('express');
const port = process.env.PORT;
var app =express();
var server = require('http').createServer(app);
var io  =require('socket.io').listen(server);
var redis = require('redis');

var sub = redis.createClient();
var pub = redis.createClient();

users = [];
connections = [];
arr =[];
usernames = [];


server.listen(8080);

console.log("server running..");

sub.on("error", function (err) {
    console.log("Error " + err);
});
sub.on("subscribe", function(channel, count) {
    console.log("Subscribed to " + channel + ". Now subscribed to " + count + " channel(s).");
});

 sub.on("message", function(channel, message) {
   
   var client=message;
    console.log("Message from channel " + channel + ": " + message);
    io.sockets.emit('all users',client);

    
});
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log("connected");
    
    socket.on('disconnect', function(){
        // users.splice(users.indexOf(socket.username), 1);
        console.log("Disconnected");
        var name = socket.username;
        console.log(name,"is disconnected");
        pub.hmset("connted",name,"offline");
      pub.hgetall("connted", function(error, result) {
        users=[];
      // console.log(result);
      users=JSON.stringify(result);
      pub.publish("user1",users);
      sub.subscribe("user1");
        connections.splice(connections.indexOf(socket),1);

        //console.log('Disconnected',connections.length);
    });
    });

     socket.on('new user', function(data){
         console.log('data', data);  
             socket.username = data;
        pub.hmset("connted",data,"online");
         
     
        // users.push(socket.username);
        // updateUsernames();

       pub.hgetall("connted", function(error, result) {
        users=[];
      // console.log(result);
      users=JSON.stringify(result);
      pub.publish("user",users);
      sub.subscribe("user");
      

     });
   
});
});    
   //      Updateusers();
   

   // function updateUsernames(){
   //      io.sockets.emit('get users', users);
   //  }
   //  function Updateusers(){
   //      io.sockets.emit('all users',usernames);
   //  }

