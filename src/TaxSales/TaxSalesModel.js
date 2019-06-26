
const TaxSalesSchema = require('./TaxSalesSchema');
const propertySchema = require('../property/propertySchema');

const taxSalesDetail = async (req) => {
    let property = await propertySchema.findOne({ propertyNumber: req.propertyNumber });
    Object.assign(req, { property_id: property._id });
    let docs = await TaxSalesSchema.create(req)
    if (docs) {
        return docs
    } else {
        return err
    }
}

const taxsalesDataList = async (req) => {
    let pageNo = req.payload.pageNo || 0;
    let pageSize = req.payload.pageSize || 10;
    let docs = await TaxSalesSchema.paginate({}, { offset: pageNo, limit: pageSize })
    if (docs) {
        return docs;
    } else {
        return err;
    }
}


const taxSalesRecord = async (req) => {
    let docs = await TaxSalesSchema.findOne(req)
    if (docs) {
        return docs;
    } else {
        return err;
    }
}

module.exports = {
    taxSalesDetail,
    taxSalesRecord,
    taxsalesDataList
}
