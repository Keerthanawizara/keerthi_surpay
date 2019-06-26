var nodemailer = require('nodemailer');
const emailCollection = require('./emailModel');
require('dotenv').config({path:'./src/.env'});
const mongoose = require('mongoose');


//Email api'

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
         user:process.env.EMAIL,
         pass:process.env.PASSWORD
    }
});

    const  sendEmail = async(req,h) => {
       var mailOptions = await emailCollection.getToAddress(req.payload)
       Object.assign(mailOptions, {from:"keer <keerthirajme@gmail.com>"})
      // mailOptions.to="abdullahpb007@gmail.com"
       transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
          return err 
        }else{
        console.log(info)
        }
      })
      let docs = await emailCollection.sendEmail(mailOptions)
       if(docs){
         return docs
       }
    }

    const EmailDataList = async (req) => {
     const query = req.query
     const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber }
      let docs = await emailCollection.EmailDataList(params)
      if (docs) {
          return docs
      }
  }


module.exports = {
 sendEmail,
 EmailDataList
}