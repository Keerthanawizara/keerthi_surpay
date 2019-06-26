const searchCollection = require('./searchModel')


const SearchRecord = async (req) => {
    let docs = await searchCollection.SearchRecord(req)
    if (docs) {
      return docs
    }
  } 

  module.exports ={
    SearchRecord
  }