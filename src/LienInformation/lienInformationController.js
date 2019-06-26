const lienCollection = require('./lienInformationModel');
const mongoose = require('mongoose');



const lienDetail = async (req) => {
    var data = req.payload
    let docs = await lienCollection.lienDetail(data)
    if (docs) {
        return docs
    } else {
        return { statusCode: 400, message: "Unable to Create Lien Information" }
    }
}

const lienDataList = async (req) => {
    let docs = await lienCollection.lienDataList(req)
    if (docs) {
        return docs
    }
}

const lienRecord = async (req) => {
    const query = req.query;
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await lienCollection.lienRecord(params)
        if (docs) {
            return docs
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}

const lienRecordUpdate = async (req) => {
    const query = req.query;
    const data = req.payload
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await lienCollection.lienRecordUpdate(params, data)
        if (docs.n && docs.nModified) {
            return { statusCode: 200, message: "Lien updated success" }
        } else {
            return { statusCode: 400, message: " Lien updated Unsuccess! " }
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}

const lienRecordDelete = async (req) => {
    query = req.query
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await lienCollection.lienRecordDelete(params)
        if (docs.n && docs.deletedCount) {
            return { statusCode: 200, message: "lien deleted success" }
        } else {
            return { statusCode: 400, message: " lien deleted Unsuccess!" }
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}
module.exports = {
    lienDetail,
    lienDataList,
    lienRecordUpdate,
    lienRecord,
    lienRecordDelete
}