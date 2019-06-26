const countySchema = require('./countySchema');
const propertySchema = require('../property/propertySchema');

const countyDetail = async (req) => {
  let property = await propertySchema.findOne({ propertyNumber: req.propertyNumber });
  Object.assign(req, { property_id: property._id });
  let docs = await countySchema.create(req)
  if (docs) {
    return docs
  } else {
    return err
  }
}

const countyDataList = async (req) => {
  let pageNo = req.payload.pageNo || 0;
  let pageSize = req.payload.pageSize || 10;
  let docs = await countySchema.paginate({},{offset:pageNo,limit:pageSize,sort:{_id:-1}})
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

const countyRecord = async (req) => {
  let docs = await countySchema.findOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

const countyRecordUpdate = async (params, req) => {
  let docs = await countySchema.updateOne(params, { $set: req }, { multi: true })
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

const countyRecordDelete = async (req) => {
  let docs = await countySchema.deleteOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}
module.exports = {
  countyDetail,
  countyDataList,
  countyRecordUpdate,
  countyRecord,
  countyRecordDelete
}