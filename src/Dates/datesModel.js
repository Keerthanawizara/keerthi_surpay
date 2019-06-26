const datesSchema = require('./datesSchema');
const propertySchema = require('../property/propertySchema')

const DatesDetail = async (req) => {
  let property = await propertySchema.findOne({ propertyNumber: req.propertyNumber })
  Object.assign(req, { property_id: property._id });
  let docs = await datesSchema.create(req)
  if (docs) {
    return docs
  } else {
    return err
  }
}

const DatesDataList = async (req) => {
  let pageNo = req.payload.pageNo || 0;
  let pageSize = req.payload.pageSize || 10;
  const requestKeys = Object.keys(req.payload.search)[0]
  const requestValues = Object.values(req.payload.search)[0]
  let docs = [];
  if(Object.keys(req.payload.search).length === 0)
  {
    docs = await datesSchema.paginate({},{offset:pageNo,limit:pageSize,sort:{_id:-1}})
  }else{
    docs=await datesSchema.paginate({[requestKeys]:{ $regex: requestValues, $options: 'i' }},{offset:pageNo,limit:pageSize,sort:{_id:-1}})
  }
  if (docs){
    return (docs) 
  }
}          


const DatesRecord = async (req) => {
  let docs = await datesSchema.findOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}
const DatesRecordUpdate = async (req, params) => {
  let docs = await datesSchema.updateOne(req, { $set: params })
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

const DatesRecordDelete = async (req) => {
  let docs = await datesSchema.deleteOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}


module.exports = {
  DatesDetail,
  DatesDataList,
  DatesRecordUpdate,
  DatesRecord,
  DatesRecordDelete
}