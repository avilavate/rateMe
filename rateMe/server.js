var express=require("express");
var engine = require('ejs-mate');
var app=express();
app.engine('ejs', engine);
app.set('view engine', 'ejs');
var routes=require('./routes/routes');
routes(app);
// app.get('/', function(req, res) {
//     res.render('index',{'title':'RateMe || Index'});
// });
// app.get('/user', function(req, res) {
//     res.render('user',{'title':'RateMe || User'});
// });


app.listen("3000", ()=>{console.log("App is running at 3000 port...")});