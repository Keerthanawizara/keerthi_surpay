const mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');
//get the Schema class
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    pin: {
     required : true,
     type : String
    },
      payment: {
          required : true,
          type : String
      },
      Date:{
        type: Date, 
        default: Date.now
      },

tenant_id: String,
type: String,
ach_type: String,
account_number: String,
routing_number: String,
card_number: String,
exp_month:String,
exp_year: String,
security_code: String,
first_name: String,
last_name: String,
zip: String,
auto_debit: String,
debit_on: String,
pay: String,
total_amount:String,
amount: String
})

PaymentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('paymentList', PaymentSchema, 'paymentList');


