const reportCtrl = require('./reportController')

module.exports = [
    {
        method: 'POST',
        config: {
            tags: ['api', 'Full Certificate Journal'],
            description: 'Create Full Certificate Journal for Surepay',
            auth: false      
        },
        path: '/fullCertificateJournal',
        handler: reportCtrl.fullCerticateJournal
    }
];
