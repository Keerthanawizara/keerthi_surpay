const mongoose = require('mongoose');
//get the Schema class
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    fromDate: String,
    toDate: String,
});

module.exports = mongoose.model('List', ReportSchema, 'List');
