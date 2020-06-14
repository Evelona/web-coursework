var express = require("express"),
http = require("http"),
mongoose = require("mongoose"),
app = express()

app.use(express.static(__dirname + "/client"));
app.use('/admin', express.static(__dirname + '/client/admin.html'));
app.use('/auth', express.static(__dirname + '/client/student.html'));
app.use(express.urlencoded());

http.createServer(app).listen(3000);

app.post("/todos", function (req, res) {
    // сейчас объект сохраняется в req.body
    var newToDo = req.body;
    console.log(newToDo);
    toDos.push(newToDo);
    // отправляем простой объект
    res.json({"message":"Вы размещаетесь на сервере!"});
});