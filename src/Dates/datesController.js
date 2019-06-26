const datesCollection = require('./datesModel');
const mongoose = require('mongoose');



const DatesDetail = async (req) => {
    var data = req.payload
    let purchaseDate = "2019-01-01"
    data.estimatedDate = new Date(purchaseDate);
    data.estimatedDate.setDate(data.estimatedDate.getDate() + 135)
    data.estimatedDate = (data.estimatedDate.getFullYear() + "-" + data.estimatedDate.getMonth() + "-" + data.estimatedDate.getDate())

    data.estimatedPetitionDate = new Date(purchaseDate);
    data.estimatedPetitionDate.setMonth(data.estimatedPetitionDate.getMonth() + 24)
    data.estimatedPetitionDate = (data.estimatedPetitionDate.getFullYear() + "-" + data.estimatedPetitionDate.getMonth() + "-" + data.estimatedPetitionDate.getDate())


    let docs = await datesCollection.DatesDetail(data)
    if (docs) {
        return docs
    } else {
        return { statusCode: 400, message: "Unable to Create Assessee" }
    }
}

const DatesDataList = async (req) => {
    let docs = await datesCollection.DatesDataList(req)
    if (docs) {
        return docs
    }
}

const DatesRecord = async (req) => {
    const query = req.query;
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await datesCollection.DatesRecord(params)
        if (docs) {
            return docs
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}
const DatesRecordUpdate = async (req) => {
    const query = req.query;
    const data = req.payload
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await datesCollection.DatesRecordUpdate(params, data)
        if (docs.n && docs.nModified) {
            return { statusCode: 200, message: "Important dates updated success" }
        } else {
            return { statusCode: 400, message: " Important dates updated Unsuccess! " }
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}

const DatesRecordDelete = async (req) => {
    query = req.query
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await datesCollection.DatesRecordDelete(params)
        if (docs.n && docs.deletedCount) {
            return { statusCode: 200, message: "Important dates deleted success" }
        } else {
            return { statusCode: 400, message: "Important dates deleted Unsuccess!" }
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}

module.exports = {
    DatesDetail,
    DatesDataList,
    DatesRecordUpdate,
    DatesRecord,
    DatesRecordDelete

}