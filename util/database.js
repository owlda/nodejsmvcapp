const mongodb = require('mongodb');
const mongodbClient = mongodb.MongoClient;


const mongoConnectFunction = (callback)=> {
    mongodbClient.connect("mongodb+srv://userdb:c9yJd3vejrMZrumf@clustermdb-wbnah.mongodb.net/test?retryWrites=true&w=majority")
    .then(result => {
        console.log("connection success. ");
        callback(result);
    })
    .catch(error => {
        console.log("connection failed. "+error);
    });
}
module.exports = mongoConnectFunction;
