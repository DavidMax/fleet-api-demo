var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// configure bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set port
var port = process.env.PORT || 5000;

// instantiate express router
var router = express.Router();

// setup express middleware
router.use(function(req, res, next) {
    // simulate server-side behavior for all routes
    console.log('This simulates some server-side functionality.');
    // continue to other routes
    next();
});

// define routes

router.get('/', function(req, res) {
    res.json({ message: 'The fleet api demo is working!' });
});

// register routes
app.use('/fleet-api', router);

app.listen(port);
console.log('Listening on port ' + port);
