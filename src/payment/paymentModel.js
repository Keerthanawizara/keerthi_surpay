const paymentSchema = require('./paymentSchema');


const createPayment = async(req) => {
  let docs = await paymentSchema.create(req)
  if(docs){
    return docs
  }else{
    return err
  }
} 

const paymentDataList =async()=>{
  let docs = await paymentSchema.paginate({},{offset:0, limit:10})
    if(docs) {
      return docs;
   }else {
       return err;
   }
  } 

  const paymentRecord = async(req)=> {
    let docs = await paymentSchema.findOne(req)
    if(docs) {
      return docs;
   }else {
       return err;
   }
  }

 const paymentRecordUpdate = async(req,params) => {
  let docs = await paymentSchema.updateOne(req,{ $set:params})
  if(docs) {
    return docs;
 }else {  
  // console.log(err)
     return err;
 }
}

const paymentRecordDelete = async(req) =>{
  let docs = await paymentSchema.deleteOne(req)
  if(docs) {
    return docs;
 }else {
     return err;
 }
}







module.exports = {
  createPayment,
  paymentDataList,
  paymentRecord,
  paymentRecordUpdate,
  paymentRecordDelete
}