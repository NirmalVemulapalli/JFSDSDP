// Import MongoClient from mongodb library
const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.bzwfiwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
client.connect();
const db = client.db('counselling');
const col = db.collection('Students'); // Assuming you have a collection named 'students'

// Define a route to handle student submissions
app.post('/Students', async (req, res) => {
  const studentDetails = req.body; // Assuming studentDetails is passed in the request body

  try {
    // Insert student details into the collection
    await col.insertOne(studentDetails);
    res.send('Student details submitted successfully');
  } catch (error) {
    console.error('Error inserting document:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Other routes...

// Start the server
app.listen('8085', () => {
  console.log('Server is Running');
});
