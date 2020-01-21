const getDB = require('../util/database').mongoConnectFunctionGetDB;
const mongodb = require('mongodb');

module.exports = class AuthClient{

    constructor(email, password, name, codepostal){
            
        this.email = email;
        this.password = password;
        this.name = name;
        this.codepostal = codepostal;

    }
    
}