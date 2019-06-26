const escrowCollection = require('./escrowModel');
const mongoose = require('mongoose');
const Joi = require('joi');

// server side Data validation initialize

const schema = Joi.object().keys({
    propertyNumber: Joi.string(),
    amount: Joi.string(),
    date: Joi.string(),
    billingCode: Joi.string(),
    appPaymentNumber: Joi.string()
})


const escrowDatesIn = async (req) => {
    var data = req.payload
    Joi.validate(data, schema, (err) => {
        return err
    })
    let docs = await escrowCollection.escrowDatesIn(data)
    return docs

}

const escrowDatesList = async (req) => {
    let docs = await escrowCollection.escrowDatesList(req)
    if (docs) {
        return docs
    } else {
        return err
    }
}

const escrowDatesRecord = async (req) => {
    query = req.query
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await escrowCollection.escrowDatesRecord(params)
        if (docs) {
            return docs
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}

module.exports = {
    escrowDatesIn,
    escrowDatesList,
    escrowDatesRecord
}