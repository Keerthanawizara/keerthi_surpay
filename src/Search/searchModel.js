const assesseeSchema = require(('../Assessee/assesseeSchema'))
const mongoose = require('mongoose');


const SearchRecord = async (req) => {
    let pageNo = req.payload.pageNo || 0
    let pageSize = req.payload.pageSize || 10
    const requestKeys = Object.keys(req.payload.search)[0]
    const requestValues = Object.values(req.payload.search)[0]
    let SearchRecord = await assesseeSchema.find({ [requestKeys]: { $regex: requestValues, $options: 'i' } }).populate({
    path:'property_id',
    options:{
    skip:pageNo,
    limit:pageSize
    }
    })
    let data ={}
     data.docs =[]
    SearchRecord.forEach(e => {
        let doc = {
            "name": e.name,
            "propertyNumber": e.propertyNumber,
            "email": e.emailAddress,
            "address": e.property_id.address,
            "cellPhone": e.cellPhone
        };
        data.docs.push(doc);
    });
    return data
}
module.exports = {
    SearchRecord
}