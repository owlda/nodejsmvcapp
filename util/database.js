const mongodb = require('mongodb');
const mongodbClient = mongodb.MongoClient;

let _db ;

const mongoConnectFunction = (callback)=> {
    mongodbClient.connect("mongodb+srv://userdb:c9yJd3vejrMZrumf@clustermdb-wbnah.mongodb.net/appcontent?retryWrites=true&w=majority")
    .then(client => {
        console.log("MongoDB-Atlas -> connection success. ");
        _db = client.db();
        callback();
    })
    .catch(error => {
        console.log("MongoDB-Atlas -> connection failed. "+ error);
    });
}

const mongoConnectFunctionGetDB = () => {
    if(_db){
        return _db;
    }
    throw "No db found."
}

exports.mongoConnectFunction = mongoConnectFunction;
exports.mongoConnectFunctionGetDB = mongoConnectFunctionGetDB;
