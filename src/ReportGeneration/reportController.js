const reportCollection = require('./reportModel');
const mongoose = require('mongoose');
const Joi = require('joi');


//server side Data validation initialize
const schema = Joi.object().keys({
  fromDate: Joi.string().required(),
  toDate: Joi.string().required()
})

//property Update
const fullCerticateJournal = async (req) => {
  var data = req.payload
  Joi.validate(data, schema, (err,h) => {
    return err
  })
}

module.exports = {
  fullCerticateJournal
}