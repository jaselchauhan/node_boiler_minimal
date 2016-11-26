var express   = require('express');
var app       = express();

var port      = 3000;

//middleware
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
//below code allows you to reference filepaths in links(stylesheets, javascript) without having to affix public
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index.ejs');
})

app.listen(3000, function(){
  console.log("site is listening on port", port);
});






