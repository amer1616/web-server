// Use module exports to expose middleware to other files

//creating a middleware, used for logging req & res on the server
var middleware = {
  requireAuthentication: function (req, res, next){
    console.log('Private route hit!');
    next();
  },
  logger: function (req, res, next){
    console.log('Request: '+ new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};


module.exports = middleware;