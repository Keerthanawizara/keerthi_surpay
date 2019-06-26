
const userSchema = require('./userSchema')

const createUser = async (req) => {
  let docs = await userSchema.create(req)
  if (docs) {
    return docs
  } else {
    return err
  }
}

const getUserList = async () => {
  let docs = await userSchema.paginate({}, { offset: 0, limit: 10 })
  if (docs) {
    return docs;
  } else {
    return err;
  }
}


const userAuthController = async (req) => {
  let docs = await userSchema.find(req)
  if (docs.length !== 0) {
    return docs;
  } else {
    return err;
  }
}


module.exports = {
  createUser,
  getUserList,
  userAuthController
}