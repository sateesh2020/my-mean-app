var express             = require('express'),
    app                 = express();
var favicon             = require('serve-favicon');
var bodyParser          = require('body-parser'); 
var bson                = require('bson');
var mongoose            = require('mongoose');
var dbName              = 'gameofthrones';
var env                 = process.env.NODE_ENV = process.env.NODE_ENV;
/****************
Controllers
****************/
var familyController    = require('./server/controller/familyController');
/**************** 
Connecting to DB
*****************/
var dbUrl               = '';
/*if(env == 'development'){
dbUrl                   = 'mongodb://127.0.0.1:27017/'+dbName; 
}else{
dbUrl                   = 'mongodb://got:143143341@ds047672.mongolab.com:47672/'+dbName;   
}*/
dbUrl                   = 'mongodb://got:143143341@ds047672.mongolab.com:47672/'+dbName;
mongoose.connect(dbUrl);
var db                  = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connected to DB @ '+dbUrl);
});
/**************** 
Activating Express Server
*****************/
var port                = process.env.PORT || 9090; 
var server              = app.listen(port, function () {
  var host              = server.address().address;
  console.log('App listening at http://%s:%s', host, port);
});
app.use(express.static('client'));
app.use(favicon(__dirname + '/client/assests/images/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Route to handle all angular requests
app.get('/', function(req, res) {
    res.sendFile(__dirname+'/client/index.html'); // load our client/index.html file
});

app.get('/api/family', familyController.getFamilies);
app.post('/api/family', familyController.addFamily);
