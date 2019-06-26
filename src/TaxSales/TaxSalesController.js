const taxSalesCollection = require('./TaxSalesModel');
const mongoose = require('mongoose');


//create assessee api 
const taxSalesDetail = async (req) => {
    var data = req.payload;
    data.CertificateNumber = data.CertificateNumber + data.propertyNumber + data.taxYear
    let docs = await taxSalesCollection.taxSalesDetail(data)
    if (docs) {
        return docs
    } else {
        return { statusCode: 400, message: "Unable to Create Assessee" }
    }
}

const taxsalesDataList = async (req) => {
    let docs = await taxSalesCollection.taxsalesDataList(req)
    if (docs) {
        return docs
    } else {
        return err
    }
}

const taxSalesRecord = async (req) => {
    query = req.query
    if (req.params.id && query.propertyNumber) {
        const params = { property_id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
        let docs = await taxSalesCollection.taxSalesRecord(params)
        if (docs) {
            return docs
        }
    } else {
        return { statusCode: 404, message: "Provide ID and Property Number" }
    }
}

module.exports = {
    taxSalesDetail,
    taxSalesRecord,
    taxsalesDataList
}
