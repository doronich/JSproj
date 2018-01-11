var express = require("express");
var fs = require("fs");
 
var app = express();
app.use(function(request, response, next){
     
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    console.log(data);
    fs.appendFile("server.log", data + "\n",function(error,data){});
    next();
});
 
app.get("/", function(request, response){
    response.send("Hello");
});
app.listen(3000);
//masterf
//omaewa