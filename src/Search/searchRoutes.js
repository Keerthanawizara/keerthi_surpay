const searchCtrl = require('./searchController')

module.exports = [
{
    method: 'POST',
    config: {
        tags: ['api', 'search details'],
        description: 'search for Surepay',
        auth:false
    },
    path: '/SearchAll',
    handler: searchCtrl.SearchRecord
}
];