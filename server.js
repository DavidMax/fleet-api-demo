var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Vehicle = require('./app/models/vehicles');

// connect to database
mongoose.connect('mongodb://localhost/fleet-api-demo');

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

router.route('/vehicles')

    // create a vehicle
    .post(function(req, res) {

        // create a new instance of the Vehicle model
        var vehicle = new Vehicle();
        // set name of the vehicle from the request
        vehicle.name = req.body.name;

        // save the vehicle
        vehicle.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Vehicle has been created!' });
        });

    })

    // get all vehicles
    .get(function(req, res) {
        Vehicle.find(function(err, vehicles) {
            if (err) {
                res.send(err);
            }
            res.json(vehicles);
        });
    });

router.route('/vehicles/:vehicle_id')

    // get vehicle by id
    .get(function(req, res) {

        // lookup vehicle in model based on param
        Vehicle.findById(req.params.vehicle_id, function(err, vehicle) {
            if (err) {
                res.send(err);
            }
            // return vehicle object
            res.json(vehicle);
        });
    })

    // update vehicle by id
    .put(function(req, res) {

        // lookup vehicle in model based on param
        Vehicle.findById(req.params.vehicle_id, function(err, vehicle) {
            if (err) {
                res.send(err);
            }
            // update vehicle name
            vehicle.name = req.body.name;

            // save the vehicle
            vehicle.save(function(err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Vehicle has been updated!' });
            });

        });
    })

    // delete vehicle by id
    .delete(function(req, res) {
        Vehicle.remove({
            _id: req.params.vehicle_id
        }, function(err, vehicle) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Vehicle has been deleted!' });
        });
    });

// register routes
app.use('/fleet-api', router);

app.listen(port);
console.log('Listening on port ' + port);
