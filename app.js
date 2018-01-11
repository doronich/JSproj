// подключение express
var express = require("express");
// создаем объект приложения
var app = express();
// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
     
    response.send("<h1>Главная страница</h1>");
});
app.get("/about", function(request, response){
     
    response.send("<h1>О сайте</h1>");
});
app.get("/contact", function(request, response){
    
    response.send("<h1>Контакты</h1>");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);


