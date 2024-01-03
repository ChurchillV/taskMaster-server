const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

// MongoDB Client and Server dependencies
const { MongoClient, ServerApiVersion } = require('mongodb');

// Importing environment variables
const { MONGO_URL } = process.env;

// Creating a mongodb client
const client = new MongoClient(MONGO_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
  });

// Establishing mongodb connection
async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

run().catch(console.dir);

app.listen(2099, () => {
    console.log('TaskMaster is running on Port 2099');
})