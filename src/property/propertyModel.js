const propertySchema = require('./propertySchema');
const apiCaller = require('./propertyService');
const assesseeSchema = require('../Assessee/assesseeSchema');
const mongoose = require('mongoose');

//const propertyList=mongoose.model('propertyList', PropertySchema, 'propertyList');

const propertyDetail = async (req) => {
  let docs = await propertySchema.create(req)
  if (docs) {
    let apiRes = await apiCaller.getAllProperty()
    console.log(apiRes)
    return docs
  } else {
    return err
  }
}

const propertyDataList = async (req) => {
  let pageNo = req.payload.pageNo || 0;
  let pageSize = req.payload.pageSize || 10;
  const requestKeys = Object.keys(req.payload.search)[0]
  const requestValues = Object.values(req.payload.search)[0]
  let docs = [];
  if (Object.keys(req.payload.search).length === 0) {
    docs = await propertySchema.paginate({}, { offset: pageNo, limit: pageSize, sort: { _id: -1 } })
  } else {
    docs = await propertySchema.paginate({ [requestKeys]: { $regex: requestValues, $options: 'i' }, populate: "assesseeList" }, { offset: pageNo, limit: pageSize, sort: { _id: -1 } })
  }
  if (docs) {
    return (docs)
  }
}



const propertyRecord = async (req) => {
  let docs = await propertySchema.findOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}


const propertyRecordUpdate = async (req, params) => {
  let docs = await propertySchema.updateOne(req, { $set: params })
  if (docs) {
    return docs;
  } else {
    return err;
  }
}


const propertyRecordDelete = async (req) => {
  let docs = await propertySchema.deleteOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

const propertyDuplicateChecker = async (req) => {
  let docs = await propertySchema.findOne({ propertyNumber: req });
  if (docs) {
    return docs;
  }
}


// const SearchRecord = async(req)=>{
//    let pageNo = req.payload.pageNo || 0
//   let pageSize = req.payload.pageSize || 10
//   const requestKeys = Object.keys(req.payload.search)[0]
//   const requestValues = Object.values(req.payload.search)[0]
//  propertySchema.aggregate(
//    [
//      {
//         $group: {_id : { propertyNumber: { propertyNumber: "9990033keerthi" }}}
//      },
// {$lookup:
//        {
//         from:"propertyList" ,
//         localField:"propertyNumber" ,
//         foreignField:"propertyNumber" ,
//         as:  "property_List"
//        }
//  },
//  {$lookup:
//   {
//    from:"assesseeList" ,
//    localField:"propertyNumber" ,
//    foreignField:"propertyNumber" ,
//    as:  "assessee_List"
//   }
// },
//  {
//       $match:{[requestKeys]:{$regex:requestValues,$options:"i"}}
//  },
//  {
//        $skip:pageNo
//  },
//  {
//        $limit:pageSize
//  },
//  {
//    $sort:{_id:-1}
//  }   
//   ],function(err,docs){
//     if(docs){
//       return docs
//     }else{
//       console.log("XXXXXXXXXXXX",err)
//       return err
//     }
//   })
// }





module.exports = {
  propertyDetail,
  propertyDataList,
  propertyRecord,
  propertyRecordUpdate,
  propertyRecordDelete,
  propertyDuplicateChecker,
  
} 