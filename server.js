var express = require("express"),
http = require("http"),
mongoose = require("mongoose"),
app = express()

const directions = [
    { 
        "name": "Программная инженерия",
        "id": "pi",
        "students": ["Тумби Эвелина Квинта"]
    },
    { 
        "name": "Информационная безопасность",
        "id": "ib",
        "students": []
    },
    { 
        "name": "Прикладная математика и информатика",
        "id": "pmi",
        "students": []
    },
    { 
        "name": "Компьютеные сети",
        "id": "kb",
        "students": []
    },
    {
        "name": "Компьютеные сети Магистры",
        "id": "kbM",
        "students": ["Тумби Эвелина Квинта"]
    },

]

app.get("/directions.json", function (req, res) {
    res.json(directions);
});

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