
const mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');
//get the Schema class
const Schema = mongoose.Schema;

const taxSalesSchema = new Schema({
    property_id: String,
    propertyNumber: String,
    CertificateNumber: String,
    taxBalance: String,
    taxYear: String,
    dateOfSale: String,
    intrestRate: String,
    buyersName: String,
    faceAmount: String,
    intrestFace: String,
    accuredIntrest: String,
    faceValue: String,
    estimate: String

});
taxSalesSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('TaxSalesList', taxSalesSchema, 'TaxSalesList');