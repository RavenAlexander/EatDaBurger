var express = require("express");
var methodOverride= require('method-override');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(methodOverride('_method'));
app.engine('handlebars', exphbs ({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgercontroller.js');
app.use(routes);


app.listen(PORT, function(){
    console.log(`Listening on port: ${PORT}`);
});

