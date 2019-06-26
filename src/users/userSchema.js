const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        required : true,
        type : String
    },
    password: {
        required : true,
        type : String
    }
});
userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('userList', userSchema, 'userList');
