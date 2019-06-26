const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const EmailSchema = new Schema({
    propertyNumber:String,
    property_id:String,
    from:String,
    to:String,
    subject:String,
    Text:String,
    Date:{
        type: Date, 
        default: Date.now
      }
   
});
EmailSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('emailList', EmailSchema, 'emailList');