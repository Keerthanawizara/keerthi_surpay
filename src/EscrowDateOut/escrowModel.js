const escrowSchema = require('./escrowSchema');
const propertySchema = require('../property/propertySchema')

const escrowDatesOut = async (req) => {
    let property = await propertySchema.findOne({ propertyNumber: req.propertyNumber })
    Object.assign(req, { property_id: property._id });
    let docs = await escrowSchema.create(req)
    if (docs) {
        return docs
    } else {
        return err
    }
}

const escrowDatesOutList = async (req) => {
    let pageNo = req.payload.pageNo || 0;
    let pageSize = req.payload.pageSize || 10;
    let docs = await escrowSchema.paginate({},{offset:pageNo,limit:pageSize,sort:{_id:-1}})
    if (docs) {
        return docs;
    } else {
        return err;
    }
}


const escrowDatesOutRecord = async (req) => {
    let docs = await escrowSchema.findOne(req)
    if (docs) {
        return docs;
    } else {
        return err;
    }
}

module.exports = {
    escrowDatesOut,
    escrowDatesOutList,
    escrowDatesOutRecord
}
