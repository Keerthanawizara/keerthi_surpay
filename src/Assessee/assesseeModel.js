const assesseeSchema = require('./assesseeSchema');
const propertySchema = require('../property/propertySchema');
const apiCaller = require('./assesseeService');

// const assesseeDetail = async (req) => {
//   console.log("CCCCCCCCCCC",req)
//   let property = await propertySchema.findOne({ propertyNumber: req.propertyNumber });
//   Object.assign(req, { property_id: property._id });
//   let docs = await assesseeSchema.create(req)
//   movein_date = (docs.movein_date.getFullYear() + "-" + docs.movein_date.getMonth() + "-" + docs.movein_date.getDate())
//   if (docs) {
//     let apiRess = await apiCaller.getAllProperty();
//    let unit_id,property_id,number;
//   apiRess.map((x) =>{
//    if(x.name == req.propertyNumber){
//        x.units.map((y)=>{
//          unit_id = y.id;
//          property_id = y.property_id;
//          number = y.number;
//       })
//     }
//   })  
 
//   let apiRes = await apiCaller.addUserTenant(req.emailAddress, req.name, req.name,unit_id,number,property_id,movein_date) 
//   return docs
//   } else {
//     return err
//   }
// }
const assesseeDetail = async (req) => {
  let property = await propertySchema.findOne({ propertyNumber: req.propertyNumber });
  Object.assign(req, { property_id: property._id });
  let docs = await assesseeSchema.create(req)
  if (docs) {
    return docs
  } else {
    return err
  }
}



const assesseeDataList = async (req) => {
  let pageNo = req.payload.pageNo || 0;
  let pageSize = req.payload.pageSize || 10;
  const requestKeys = Object.keys(req.payload.search)[0]
  const requestValues = Object.values(req.payload.search)[0]
  let docs = [];
  if(Object.keys(req.payload.search).length === 0)
  {
    docs = await assesseeSchema.paginate({},{offset:pageNo,limit:pageSize,sort:{_id:-1}})
  }else{
    docs=await assesseeSchema.paginate({[requestKeys]:{ $regex: requestValues, $options: 'i' }},{offset:pageNo,limit:pageSize,sort:{_id:-1}})
  }
  if (docs){
    return (docs) 
  }
}          

const assesseeRecord = async (req) => {
  let docs = await assesseeSchema.findOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

const assesseeRecordUpdate = async (params, req) => {
  let docs = await assesseeSchema.updateOne(params, { $set: req }, { multi: true })
  if (docs) {
    let apiRes = await apiCaller.getTenantList();
    console.log("AAAAAA",apiRes)
    let id,unit_id,number;
    apiRes.map((x) =>{
            id = x.id;
            unit_id  = x.unit_id;
            number = x.number;
         })
        console.log("1",id)
        console.log("1",unit_id)
        console.log("1",number)  
    
    return docs;
  } else {
    return err;
  }
}

const assesseeRecordDelete = async (req) => {
  let docs = await assesseeSchema.deleteOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

module.exports = {
  assesseeDetail,
  assesseeDataList,
  assesseeRecord,
  assesseeRecordUpdate,
  assesseeRecordDelete,
  
}