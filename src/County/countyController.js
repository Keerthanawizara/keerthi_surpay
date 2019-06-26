const countyCollection = require('./countyModel');
const mongoose = require('mongoose');
const Joi = require('joi');

//server side data validation

const schema = Joi.object().keys({
    propertyNumber: Joi.string().required(),
    County: Joi.string(),
    Name: Joi.string(),
    Position: Joi.string(),
    Address: Joi.string(),
    PhoneNumber: Joi.string(),
    EmailAddress: Joi.string(),
    Website: Joi.string(),
}).with('propertyNumber', 'EmailAddress')

//create county api 

const countyDetail = async (req, h) => {
    var data = req.payload
    Joi.validate(data, schema, (err) => {
        return err
    })
    let docs = await countyCollection.countyDetail(data)
    if (docs) {
        return docs
    } else {
        return err
    }
}
// countyDataList api table List Page


const countyDataList = async (req) => {
    let docs = await countyCollection.countyDataList(req)
    if (docs) {
        return docs
    }
}

const countyRecord = async (req) => {
    query = req.query
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await countyCollection.countyRecord(params)
        if (docs) {
            return docs
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}

//countyRecordupdate api using pin 

const countyRecordUpdate = async (req) => {
    query = req.query
    var data = req.payload
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await countyCollection.countyRecordUpdate(params, data)
        if (docs.n && docs.nModified) {
            return { statusCode: 200, message: "county updated success" }
        } else {
            return { statusCode: 400, message: "county updated Unsuccess " }
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}

const countyRecordDelete = async (req) => {
    query = req.query
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await countyCollection.countyRecordDelete(params)
        if (docs.n && docs.deletedCount) {
            return { statusCode: 200, message: "county deleted success" }
        } else {
            return { statusCode: 400, message: "county deleted unsuccess" }
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}



module.exports = {
    countyDetail,
    countyDataList,
    countyRecordUpdate,
    countyRecord,
    countyRecordDelete




}
