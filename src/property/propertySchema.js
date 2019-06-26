const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
//get the Schema class
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    propertyNumber: {
        type: String
    },
    county: {
        required: true,
        type: String
    },
    pin: {
        required: true,
        type: String
    },
    address: String,
    city: String,
    state: String,
    zip: String,
    townShip: String,
    classCode: String,
    assessedValue: String,
    marketValue: String,
    taxesPerYear: String,
    preeqexm: String,
    homeOwners: String,
    seniorExemption: String,
    seniorFreeze: String,
    totalAcres: String,
    legalDescription: String,
    googleMapView: String,
    

    

});
PropertySchema.plugin(mongoosePaginate);
module.exports = mongoose.model('propertyList', PropertySchema, 'propertyList');
