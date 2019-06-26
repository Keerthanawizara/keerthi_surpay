const propertyCtrl = require('./propertyController')

module.exports = [
    {
        method: 'POST',
        config: {
            tags: ['api', 'property details'],
            description: 'get Property details for Surepay'
        },
        path: '/propertyDataList',
        handler: propertyCtrl.propertyDataList
    },
    {
        method: 'POST',
        config: {
            tags: ['api', 'property details'],
            description: 'create Property details for Surepay'
        },
        path: '/propertyDetail',
        handler: propertyCtrl.propertyDetail,
    },
    {
        method: 'GET',
        config: {
            tags: ['api', 'property details'],
            description: 'get single Property using Id & propertyNumber for Surepay'
        },
        path: '/propertyRecord/{id}',
        handler: propertyCtrl.propertyRecord
    },
    {
        method: 'PUT',
        config: {
            tags: ['api', 'property details'],
            description: 'Update Property details using Id & propertyNumber for Surepay'
        },
        path: '/propertyRecordUpdate/{id}',
        handler: propertyCtrl.propertyRecordUpdate
    },
    {
        method: 'DELETE',
        config: {
            tags: ['api', 'property details'],
            description: 'Delete Property details using Id & propertyNumber for Surepay',
        },
        path: '/propertyRecordDelete/{id}',
        handler: propertyCtrl.propertyRecordDelete
    },
    
];
