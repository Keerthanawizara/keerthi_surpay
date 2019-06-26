const mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');
//get the Schema class
const Schema = mongoose.Schema;

const lienSchema = new Schema({
    property_id: {
        type : Schema.ObjectId,
        ref: 'propertyList'
    },
    propertyNumber: String,
    creditor: String,
    amount: String,
    paymentAmount: String,
});
lienSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('lienList', lienSchema, 'lienList');