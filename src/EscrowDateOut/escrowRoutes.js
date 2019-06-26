const escrowOutCtrl = require('./escrowController')


module.exports = [

    {
        method: 'POST',
        config: {
            tags: ['api', 'dateOut details'],
            description: 'create escrow datesOut List for Surepay',
        },
        path: '/escrowDatesOut',
        handler: escrowOutCtrl.escrowDatesOut
    },
    {
        method: 'POST',
        config: {
            tags: ['api', 'datesOut details'],
            description: 'get escrow List for Surepay',
        },
        path: '/escrowDateOutList',
        handler: escrowOutCtrl.escrowDatesOutList
    },
    {
        method: 'GET',
        config: {
            tags: ['api', 'datesOut details'],
            description: 'get single datesOut List using Id & propertyNumber for Surepay',
        },
        path: '/escrowDatesOutRecord/{id}',
        handler: escrowOutCtrl.escrowDatesOutRecord
    },

];

