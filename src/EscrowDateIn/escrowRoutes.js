const escrowCtrl = require('./escrowController')


module.exports = [

    {
        method: 'POST',
        config: {
            tags: ['api', 'dateIn details'],
            description: 'create escrow datesIn List for Surepay',
        },
        path: '/escrowDatesIn',
        handler: escrowCtrl.escrowDatesIn
    },
    {
        method: 'POST',
        config: {
            tags: ['api', 'datesIn details'],
            description: 'get escrow List for Surepay',
        },
        path: '/escrowDatesList',
        handler: escrowCtrl.escrowDatesList
    },
    {
        method: 'GET',
        config: {
            tags: ['api', 'datesIn details'],
            description: 'get single datesIn List using Id & propertyNumber for Surepay',
        },
        path: '/escrowDatesInRecord/{id}',
        handler: escrowCtrl.escrowDatesRecord
    },

];

