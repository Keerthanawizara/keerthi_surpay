const mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');
//get the Schema class
const Schema = mongoose.Schema;

const AssesseeSchema = new Schema({
    propertyNumber: {
        required: true,
        type: String
    },
    name: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    address: String,
    cellPhone: String,
    emailAddress: String,
    movein_date:{
        type: Date, 
        default: Date.now
      },
    property_id : {
        type : Schema.ObjectId,
        ref: 'propertyList'
    }

});
AssesseeSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('assesseeList', AssesseeSchema, 'assesseeList');