const assesseeCtrl = require('./assesseeController');

module.exports =
    [
        {
            method: 'POST',
            config: {
                tags: ['api', 'Assessee details'],
                description: 'get assessee List for Surepay'
            },
            path: '/assesseeDataList',
            handler: assesseeCtrl.assesseeDataList
        },
        {
            method: 'POST',
            config: {
                tags: ['api', 'Assessee details'],
                description: 'create assessee List for Surepay'
            },
            path: '/assesseeDetail',
            handler: assesseeCtrl.assesseeDetail
        },
        {
            method: 'GET',
            config: {
                tags: ['api', 'Assessee details'],
                description: 'get single assessee List using Id & propertyNumber for Surepay'
            },
            path: '/assesseeRecord/{id}',
            handler: assesseeCtrl.assesseeRecord
        },
        {
            method: 'PUT',
            config: {
                tags: ['api', 'Assessee details'],
                description: 'Update assessee List using Id & propertyNumber for Surepay'
            },
            path: '/assesseeRecordUpdate/{id}',
            handler: assesseeCtrl.assesseeRecordUpdate
        },
        {
            method: 'DELETE',
            config: {
                tags: ['api', 'Assessee details'],
                description: 'Delete assessee List using Id & propertNumber for Surepay',
            },
            path: '/assesseeRecordDelete/{id}',
            handler: assesseeCtrl.assesseeRecordDelete
        }

    ];

