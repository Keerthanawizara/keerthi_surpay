const emailSchema = require('./emailSchema');
const propertySchema = require('../property/propertySchema');
const assesseeSchema = require('../Assessee/assesseeSchema')
const sendEmail = async(req) => {
  
    let docs = await emailSchema.create(req)
    console.log("cc",req)
    if(docs){
      return docs
    }else{
      return err
    }
  }
  
  const getToAddress = async(req)=>{
    let property = await propertySchema.findOne({ propertyNumber: req.propertyNumber });
    let assessee = await assesseeSchema.findOne({ propertyNumber: req.propertyNumber });
    Object.assign(req, { property_id: property._id });
    Object.assign(req, { to: assessee.emailAddress});
    return req;
  }


  const EmailDataList = async (req) => {
    let docs = await emailSchema.find(req)
    if (docs) {
      return docs;
    } else {
      return err;
    }
  }
  module.exports ={
      sendEmail,
      getToAddress,
      EmailDataList
  }