const lienCtrl = require('./lienInformationController')


module.exports = [

  {
    method: 'POST',
    config: {
      tags: ['api', 'lien details'],
      description: 'create lien List for Surepay',
      auth:false
    },
    path: '/lienDetail',
    handler: lienCtrl.lienDetail
  },
  {
    method: 'POST',
    config: {
      tags: ['api', 'lien details'],
      description: 'get lien using  record for Surepay'
    },
    path: '/lienDataList',
    handler: lienCtrl.lienDataList
  },
  {
    method: 'GET',
    config: {
      tags: ['api', 'lien details'],
      description: 'get lien single record using Id & propertyNumber for Surepay'
    },
    path: '/lienRecord/{id}',
    handler: lienCtrl.lienRecord
  },

  {
    method: 'PUT',
    config: {
      tags: ['api', 'lien details'],
      description: 'Update lien List using Id & propertyNumber for Surepay'
    },
    path: '/lienRecordUpdate/{id}',
    handler: lienCtrl.lienRecordUpdate
  },
  {
    method: 'DELETE',
    config: {
      tags: ['api', 'lien details'],
      description: 'Delete lien List using Id & propertyNumber for Surepay'
    },
    path: '/lienRecordDelete/{id}',
    handler: lienCtrl.lienRecordDelete
  }
];