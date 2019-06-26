const mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');
//get the Schema class
const Schema = mongoose.Schema;

const DatesOutSchema = new Schema({
    property_id: String,
    propertyNumber: String,
    amount: String,
    date: String,
    billingCode: String,
    paymentTo: String,
    reason: String
});
DatesOutSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('datesOutList', DatesOutSchema, 'datesOutList');
