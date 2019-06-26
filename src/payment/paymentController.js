const paymentCollection = require('./paymentModel');
const mongoose = require('mongoose');
const Joi = require('joi');

// server side Data validation initialize

const schema = Joi.object().keys({
    pin: Joi.string().required(),
   payment: Joi.string().required() 
}).with('pin', 'payment');


const createPayment = async(req,h) => {
     var data = req.payload
     Joi.validate(data, schema,(err)=>{
        return err
     })
    let docs = await paymentCollection.createPayment(data)
   if(docs){
       return docs
   }else{
       return err
   }   
}
        

const paymentDataList = async(req,h) => {
     let docs =  await paymentCollection.paymentDataList(req)
        if(docs){
            //console.log(docs)
            return docs
        }else{
            return err
   
        }     
       }

       const paymentRecord = async(req,h) => {
          const query = req.query;
        const params = {_id: mongoose.Types.ObjectId(req.params.id),pin:query.pin}; 
        let docs = await paymentCollection.paymentRecord(params)
         if(docs){
            return docs
        }else{
            return err
        } 
    }      
    
    
    const paymentRecordUpdate = async(req,h) => {
        const query = req.query;
        const data = req.payload
        const params = {_id: mongoose.Types.ObjectId(req.params.id),pin:query.pin};
        let docs = await paymentCollection.paymentRecordUpdate(params, data)
        if(docs){
           return docs
       }else{
           return err            
                                                                               
       }   
    }

    const paymentRecordDelete = async(req,h) => {
        const query = req.query;
        const params = {_id: mongoose.Types.ObjectId(req.params.id),pin:query.pin}; 
        let docs = await paymentCollection.paymentRecordDelete(params)
        if(docs){
           return docs
       }else{
           return err
       } 
   }      
   
    
        






        module.exports = {
            createPayment,
            paymentDataList,
            paymentRecord,
            paymentRecordUpdate,
            paymentRecordDelete
           
        }