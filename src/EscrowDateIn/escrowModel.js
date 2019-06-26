const escrowSchema = require('./escrowSchema');
const propertySchema = require('../property/propertySchema')

const escrowDatesIn = async (req) => {
    let property = await propertySchema.findOne({ propertyNumber: req.propertyNumber })
    Object.assign(req, { property_id: property._id });
    let docs = await escrowSchema.create(req)
    if (docs) {
        return docs
    } else {
        return err
    }
}

const escrowDatesList = async (req) => {
    let pageNo = req.payload.pageNo || 0;
    let pageSize = req.payload.pageSize || 10;
    let docs = await escrowSchema.paginate({},{offset:pageNo,limit:pageSize,sort:{_id:-1}})
    if (docs) {
        return docs;
    } else {
        return err;
    }
}


const escrowDatesRecord = async (req) => {
    let docs = await escrowSchema.findOne(req)
    if (docs) {
        return docs;
    } else {
        return err;
    }
}

module.exports = {
    escrowDatesIn,
    escrowDatesList,
    escrowDatesRecord
}
