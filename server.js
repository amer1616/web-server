var express = require('express');
//creating app
var app = express();

var PORT = process.env.PORT || 3000;

//calling middleware.js
var middleware = require('./middleware.js')

//using the middleware logger above
app.use(middleware.logger);


//getting about page & calling the middleware.requireAuthentication
app.get('/about', middleware.requireAuthentication, function (req, res){
  res.send('About Us!!');
});

//tell express that u want use static html template, where __dirname is the location of web-server app; /public is the public root
app.use(express.static(__dirname + '/public'));

// server port at which app will be listened
app.listen(PORT, function (){
  console.log('Express Server is running on port: '+ PORT);
});