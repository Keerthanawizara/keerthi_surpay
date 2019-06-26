const propertyCollection = require('./propertyModel');
const mongoose = require('mongoose');




//create API initialize
const propertyDetail = async (req) => {
  var data = req.payload
  data.marketValue = (data.assessedValue * 3);
  const propertyNumber = (data.pin + data.county)
  data.propertyNumber = propertyNumber;
  let propertyFinder = await propertyCollection.propertyDuplicateChecker(propertyNumber)
    .then(docs => docs);

  if (!propertyFinder) {
    let docs = await propertyCollection.propertyDetail(data)
    if (docs) {
      return docs
    } else {
      return err
    }
  }
  else {
    return { statusCode: 400, message: "Property Number Already Exist !" }
  }
}

//property Data List
const propertyDataList = async (req) => {
  let docs = await propertyCollection.propertyDataList(req)
  if (docs) {
    return docs
  }
}

//property Update
const propertyRecord = async (req) => {
  const query = req.query;
  if (req.params.id && query.propertyNumber) {
    const params = { _id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
    let docs = await propertyCollection.propertyRecord(params)
    if (docs) {
      return docs
    }
  } else {
    return { statusCode: 404, message: "Provide ID and Property Number" }
  }

}

//update property details 
const propertyRecordUpdate = async (req) => {
  const query = req.query;
  const data = req.payload
  if (req.params.id && query.propertyNumber) {
    const params = { _id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber }
    let docs = await propertyCollection.propertyRecordUpdate(params, data)
    if (docs.n && docs.nModified) {
      return { statusCode: 200, message: "property updated success" }
    } else {
      return { statusCode: 400, message: "property updated Unsuccess " }
    }
  } else {
    return { statusCode: 404, message: "Provide ID and Property Number" }
  }

}

//delete property details
const propertyRecordDelete = async (req) => {
  const query = req.query;
  if (req.params.id && query.propertyNumber) {
    const params = { _id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
    let docs = await propertyCollection.propertyRecordDelete(params)
    if (docs.n && docs.deletedCount) {
      return { statusCode: 200, message: "property deleted success" }
    } else {
      return { statusCode: 400, message: "property deleted unsuccess" }
    }
  } else {
    return { statusCode: 404, message: "Provide ID and Property Number" }
  }
}





module.exports = {
  propertyDataList,
  propertyDetail,
  propertyRecord,
  propertyRecordUpdate,
  propertyRecordDelete,
  
}