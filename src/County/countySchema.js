const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
//get the Schema class
const Schema = mongoose.Schema;

const CountySchema = new Schema({
    property_id: String,
    propertyNumber: String,
    County: String,
    Name: String,
    Position: String,
    Address: String,
    PhoneNumber: String,
    EmailAddress: String,
    Website: String
});
CountySchema.plugin(mongoosePaginate);
module.exports = mongoose.model('countyList', CountySchema, 'countyList');