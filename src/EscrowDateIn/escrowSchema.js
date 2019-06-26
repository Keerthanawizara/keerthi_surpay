
const mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');
//get the Schema class
const Schema = mongoose.Schema;

const DatesInSchema = new Schema({
    property_id: String,
    propertyNumber: String,
    amount: String,
    date: String,
    billingCode: String,
    appPaymentNumber: String
});
DatesInSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('datesInList', DatesInSchema, 'datesInList');
