const assesseeCollection = require('./assesseeModel');
const mongoose = require('mongoose');


//create assessee api 
const assesseeDetail = async (req) => {
    var data = req.payload;
    data.address = data.street + "," + data.city + "," + data.state
    let docs = await assesseeCollection.assesseeDetail(data)
    if (docs) {
        return docs
    } else {
        return { statusCode: 400, message: "Unable to Create Assessee" }
    }
}




//  //assessee Data list Api

const assesseeDataList = async (req) => {
    console.log(req)
    let docs = await assesseeCollection.assesseeDataList(req)
    if (docs) {
        return docs
    }
}

const assesseeRecord = async (req) => {
    query = req.query
    console.log(req)
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await assesseeCollection.assesseeRecord(params)
        if (docs) {
            return docs
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}


// //assessee record update api using id

const assesseeRecordUpdate = async (req) => {
    query = req.query
    var data = req.payload
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await assesseeCollection.assesseeRecordUpdate(params, data)
        if (docs.n && docs.nModified) {
            return { statusCode: 200, message: "Assessee updated success" }
        } else {
            return { statusCode: 400, message: "Assessee updated Unsuccess " }
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}
//  delete assessee details api using id

const assesseeRecordDelete = async (req) => {
    query = req.query
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await assesseeCollection.assesseeRecordDelete(params)
        if (docs.n && docs.deletedCount) {
            return { statusCode: 200, message: "Assessee deleted success" }
        } else {
            return { statusCode: 400, message: "Assessee deleted unsuccess" }
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}





module.exports = {
    assesseeDetail,
    assesseeDataList,
    assesseeRecord,
    assesseeRecordUpdate,
    assesseeRecordDelete
}