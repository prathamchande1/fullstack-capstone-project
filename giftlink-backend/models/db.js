const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri);

async function connectToDatabase() {
    await client.connect();

    const dbInstance = client.db(dbName);

    return dbInstance;
}

module.exports = connectToDatabase;
