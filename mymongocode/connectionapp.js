const { MongoClient } = require("mongodb");
// url connection
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function dbconnection() {
    // use connect method connect with server
    await client.connect();
    console.log("connection is successfull with server");
    // databse
    const databse = client.db("college");
    // collection
    const collection = databse.collection('student');
    // const read= await collection.find().toArray();b
    // console.log(read);

    return collection;
}
module.exports = dbconnection;