const CountyCtrl = require('./countyController')


module.exports = [

  {
    method: 'POST',
    config: {
      tags: ['api', 'county details'],
      description: 'create County List for Surepay',
    },
    path: '/countyDetail',
    handler: CountyCtrl.countyDetail
  },
  {
    method: 'POST',
    config: {
      tags: ['api', 'county details'],
      description: 'get payment using single record for Surepay',
    },
    path: '/countyDataList',
    handler: CountyCtrl.countyDataList
  },
  {
    method: 'GET',
    config: {
      tags: ['api', 'county details'],
      description: 'get single county List using Id & propertyNumber for Surepay',
    },
    path: '/countyRecord/{id}',
    handler: CountyCtrl.countyRecord
  },
  {
    method: 'PUT',
    config: {
      tags: ['api', 'county details'],
      description: 'Update county List using Id & propertyNumber for Surepay',
    },
    path: '/countyRecordUpdate/{id}',
    handler: CountyCtrl.countyRecordUpdate
  },
  {
    method: 'DELETE',
    config: {
      tags: ['api', 'county details'],
      description: 'Delete county List using Id & propertyNumber for Surepay',
    },
    path: '/countyRecordDelete/{id}',
    handler: CountyCtrl.countyRecordDelete
  }
];