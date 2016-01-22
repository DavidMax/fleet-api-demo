var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var VehicleSchema   = new Schema({
    name: String,
    type: String,
    lat: String,
    long: String,
    status: String
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
