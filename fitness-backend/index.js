var Express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
// var bodyParser = require('body-parser');
const multer = require('multer');

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://mpapa:Francis03@databaseofmpapa.xrb9obi.mongodb.net/?retryWrites=true&w=majority&appName=DatabaseOfMpapa";
var DATABASENAME = "fitnessDataBase";
var database;

app.listen(3000, async () => {
    console.log("Server running on port 3000");
    try {
        const client = await MongoClient.connect(CONNECTION_STRING);
        database = client.db(DATABASENAME);
        console.log("Connected to `" + DATABASENAME + "`!");
    } catch (error) {
        console.log("Error connecting to database!");
        throw error;
    }
});

app.get('/fitness', async (request, response) => {
    console.log('get all');
    try {
        const fitnessCollection = database.collection("fitness");
        const result = await fitnessCollection.find({}).toArray();
        console.log(result);
        response.send(result);
    } catch (error) {
        console.error("Error retrieving fitness data:", error);
        response.status(500).send("Error retrieving fitness data");
    }
});

app.get('/exercises', async (request, response) => {
    console.log('exercises');
    try {
        const fitnessCollection = database.collection("exercises");
        const result = await fitnessCollection.find({}).toArray();
        console.log(result);
        response.send(result);
    } catch (error) {
        console.error("Error retrieving fitness data:", error);
        response.status(500).send("Error retrieving fitness data");
    }
});