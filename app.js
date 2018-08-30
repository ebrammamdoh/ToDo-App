var express = require('express');
var bodyparser = require('body-parser');

var todoController = require('./controller/todo');

var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));
app.use(bodyparser.urlencoded({extended:false}));

todoController(app);

app.listen(3000,()=>{
    console.log('server started');
})