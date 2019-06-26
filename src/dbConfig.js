const mongoose = require('mongoose');

const url = "127.0.0.1:27017"
const dbName = "users"

class Database {
    connection() {
        mongoose.set('useCreateIndex', true)
        mongoose.connect(`mongodb://${url}/${dbName}`,{useNewUrlParser: true})
        .then(() => {
            console.log('Database connected successfully')
        })
        .catch(error => {
            console.log(error)
        })
    }
}



module.exports = Database


