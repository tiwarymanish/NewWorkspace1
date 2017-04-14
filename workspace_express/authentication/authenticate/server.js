var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

// var mongoose=require('mongoose');
// var db=mongoose.connect("mongodb://localhost/workflowsandlanpacks");


app.use('/hello', function(req, res) {
    res.send('hello');
});




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var workflowsRouter=require('./routes/router');

app.listen(9000,function(){
    console.log("Started on PORT", 9000);
})

app.use('/workflow',workflowsRouter);