var express = require("express");
 
var app = express();
app.use(function(request, response, next){
     
    console.log("Middleware 1");
    next();
});
app.use("/about", function(request, response, next){
     
    console.log("About Middleware");
    response.send("About Middleware");
});
 
app.get("/", function(request, response){
    console.log("Route /");
    response.send("Hello");
});
app.listen(3000);
///fsadfS