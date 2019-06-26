const lienSchema = require('./lienInformationSchema');
const propertySchema = require('../property/propertySchema')


const lienDetail = async (req) => {
  let property = await propertySchema.findOne({ propertyNumber: req.propertyNumber })
  Object.assign(req, { property_id: property._id });
  let docs = await lienSchema.create(req)
  if (docs) {
    return docs
  } else {
    return err
  }
}

const lienDataList = async (req) => {
  let pageNo = req.payload.pageNo || 0;
  let pageSize = req.payload.pageSize || 10;
  const requestKeys = Object.keys(req.payload.search)[0]
  const requestValues = Object.values(req.payload.search)[0]
  let docs = [];
  if(Object.keys(req.payload.search).length === 0)
  {
    docs = await lienSchema.paginate({},{offset:pageNo,limit:pageSize,sort:{_id:-1}})
  }else{
    docs=await lienSchema.paginate({[requestKeys]:{ $regex: requestValues, $options: 'i' }},{offset:pageNo,limit:pageSize,sort:{_id:-1}})
  }
  if (docs){
    return (docs) 
  }
}          

const lienRecord = async (req) => {
  let docs = await lienSchema.findOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}
const lienRecordUpdate = async (req, params) => {
  let docs = await lienSchema.updateOne(req, { $set: params })
  if (docs) {
    return docs;
  } else {
    return err;
  }
}


const lienRecordDelete = async (req) => {
  let docs = await lienSchema.deleteOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

module.exports = {
  lienDetail,
  lienDataList,
  lienRecordUpdate,
  lienRecord,
  lienRecordDelete
}