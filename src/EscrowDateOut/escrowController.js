const escrowCollection = require('./escrowModel');
const mongoose = require('mongoose');
const Joi = require('joi');

// server side Data validation initialize

const schema = Joi.object().keys({
    propertyNumber: Joi.string(),
    amount: Joi.string(),
    date: Joi.string(),
    billingCode: Joi.string(),
    paymentTo: Joi.string(),
    reason: Joi.string()
})


const escrowDatesOut = async (req) => {
    var data = req.payload
    Joi.validate(data, schema, (err) => {
        return err
    })
    let docs = await escrowCollection.escrowDatesOut(data)
    return docs

}

const escrowDatesOutList = async (req) => {
    let docs = await escrowCollection.escrowDatesOutList(req)
    if (docs) {
        return docs
    } else {
        return err
    }
}

const escrowDatesOutRecord = async (req) => {
    query = req.query
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await escrowCollection.escrowDatesOutRecord(params)
        if (docs) {
            return docs
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}

module.exports = {
    escrowDatesOut,
    escrowDatesOutList,
    escrowDatesOutRecord
}