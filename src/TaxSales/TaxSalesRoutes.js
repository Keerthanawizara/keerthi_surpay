
const TaxSalesCtrl = require('./TaxSalesController');

module.exports =
    [
        {
            method: 'POST',
            config: {
                tags: ['api', 'tax details'],
                description: 'get tax sales List for Surepay',
                auth:false
            },
            path: '/TaxSalesDataList',
            handler: TaxSalesCtrl.taxsalesDataList
        },
        {
            method: 'POST',
            config: {
                tags: ['api', 'tax details'],
                description: 'create tax List for Surepay',
                auth: false
            },
            path: '/TaxSalesDetail',
            handler: TaxSalesCtrl.taxSalesDetail
        },
        {
            method: 'GET',
            config: {
                tags: ['api', 'tax details'],
                description: 'get single tax List using Id & propertyNumber for Surepay',
                auth: false
            },
            path: '/TaxSalesRecord/{id}',
            handler: TaxSalesCtrl.taxSalesRecord
        },

    ];