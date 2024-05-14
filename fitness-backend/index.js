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
    // MongoClient.connect(CONNECTION_STRING, (error, client) => {
    //     if(error) {
    //         console.log("Error connecting to database!");
    //         throw error;
    //     }
    //     database = client.db(DATABASENAME);
    //     console.log("Connected to `" + DATABASENAME + "`!");
    // });
    try {
        const client = await MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
        database = client.db(DATABASENAME);
        console.log("Connected to `" + DATABASENAME + "`!");
    } catch (error) {
        console.log("Error connecting to database!");
        throw error;
    }
});

app.get('/fitness', async (request, response) => {
    console.log('get all');
    // database.collection("fitness").find({}).toArray((error, result) => {
    //     if(error) {
    //         return response.status(500).send
    //     }
    //     console.log(result);
    //     response.send(result);
    // }
    // );
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