const express = require("express");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const  cors = require('cors')


dotenv.config();

const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

// Database Name
const dbName = "dailytask";
const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(cors())

client.connect();

// GET all tasks
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("tasks");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

// SAVE (Add) a task
app.post("/", async (req, res) => {
  const data = req.body;
  const db = client.db(dbName);
  const collection = db.collection("tasks");
  const result = await collection.insertOne(data);
  res.send({ success: true, result });
});

// DELETE a task by id
app.delete("/", async (req, res) => {
  const { id } = req.body; // expect { id: "uuid" }
  const db = client.db(dbName);
  const collection = db.collection("tasks");
  const result = await collection.deleteOne({ id });
  res.send({ success: true, result });
});

// EDIT (Update) a task
app.put("/", async (req, res) => {
  const { id, todo, isCompleted } = req.body; // expect full task object
  const db = client.db(dbName);
  const collection = db.collection("tasks");

  const result = await collection.updateOne(
    { id }, // find task by id
    { $set: { todo, isCompleted } } // update fields
  );

  res.send({ success: true, result });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
