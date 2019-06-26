const Emailctrl = require('./emailController')

module.exports = [
{
    method: 'POST',
    config: {
        tags: ['api','Email details'],
        description: 'Email List for Surepay',
        auth:false
    },
     path: '/sendEmail', 
     handler: Emailctrl.sendEmail
 },
 {
    method: 'GET',
    config: {
        tags: ['api', 'Email details'],
        description: 'get Email details for Surepay',
        auth: false      
    },
    path: '/EmailDataList/{id}',
    handler: Emailctrl.EmailDataList
},
];