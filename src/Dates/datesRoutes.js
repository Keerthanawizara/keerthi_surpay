const DatesCtrl = require('./datesController')


module.exports = [

  {
    method: 'POST',
    config: {
      tags: ['api', 'Important Dates'],
      description: 'create dates List for Surepay',
      auth:false
    },
    path: '/importantDates',
    handler: DatesCtrl.DatesDetail
  },
  {
    method: 'POST',
    config: {
      tags: ['api', 'Important Dates'],
      description: 'get dates using single record for Surepay'
    },
    path: '/importantDatesList',
    handler: DatesCtrl.DatesDataList
  },
  {
    method: 'GET',
    config: {
      tags: ['api', 'Important Dates'],
      description: 'get dates single using Id & propertyNumber record for Surepay'
    },
    path: '/DatesRecord/{id}',
    handler: DatesCtrl.DatesRecord
  },
  {
    method: 'PUT',
    config: {
      tags: ['api', 'Important Dates'],
      description: 'Update dates List using Id & propertyNumber for Surepay'
    },
    path: '/importantDatesUpdate/{id}',
    handler: DatesCtrl.DatesRecordUpdate
  },
  {
    method: 'DELETE',
    config: {
      tags: ['api', 'Important Dates'],
      description: 'Delete dates List using Id & propertyNumber for Surepay'
    },
    path: '/importantDatesDelete/{id}',
    handler: DatesCtrl.DatesRecordDelete
  }
];