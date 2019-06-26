const Controller = require('./userController')

module.exports = [{
    method: 'POST',
    config: {
        tags: ['api','User access'],
        description: 'Create Users for Surepay'
    },
    path: '/createUser', 
    handler: Controller.createUser
    },
{
    method: 'POST',
    config: {
        tags: ['api','User access'],
        description: 'User login access for Surepay',
        auth: false
    },
    path: '/userLogin',
    handler: Controller.userAuthController
},
{
    method:'GET',
    config: {
        tags: ['api','User access'],
        description: 'Get list for users'
    },
    path: '/getUserList',
    handler:Controller.getUserList

}];
