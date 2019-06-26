const userCollection = require('./userModel')
const userAuthentication = require('../common/authenticator')







//create user API
const createUser = async (req) => {
    var data = req.payload
    let docs = await userCollection.createUser(data)
    if (docs) {
        return docs
    } else {
        return err
    }
}

//GetUserList
const getUserList = async (req) => {
    let docs = await userCollection.getUserList(req)
    if (docs) {
        return docs
    } else {
        return err

    }
}


const userAuthController = async (request) => {
    const userCredentials = request.payload;
    if (userCredentials && (userCredentials.username && userCredentials.password)) {
        try {
            const userData = await userCollection.userAuthController(userCredentials);
            const userAuth = new userAuthentication(userData[0]._id)
            return {
                statusCode: 200,
                message: "Authentication Successful",
                token: userAuth.getToken()
            }
        } catch{
            return {
                statusCode: 401,
                message: "Authentication Failed"
            }
        }
    }
}

module.exports = {
    createUser,
    userAuthController,
    getUserList
}