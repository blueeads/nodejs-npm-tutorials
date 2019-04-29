var express = require('express');
var app = express();
app.locals.pretty = true;
app.set ('view engine', 'jade');
app.set ('views', './views');
app.use(express.static('public')); //정적인 파일 (수정 후 바로 적용)

app.get('/template', function (req, res){
    res.render('temp');//, {time:Data(), title:'Jade'});
})

app.get('/', function(req, res){
    res.send('Hello home page');
});

app.get('/dynamic', function(req, res){
    var list = ``;
    for(var i = 0; i < 5; i++){
        list = list + `<li>conding</li>`;
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    </head>
    <body>
    <h1>Hello Dynamic</h1>
    <hi>${list}</hi1>
    ${time}
    </body>
    </html> `
res.send(output);
})

app.get('/login', function(req, res){
    res.send('Login Please');
})

app.listen(3000, function(){
    console.log('Connected 3000 port');
});