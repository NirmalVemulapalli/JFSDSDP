const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const { expressjwt: exjwt } = require('express-jwt');
const jwt_decode = require('jwt-decode');

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

const secretkey = "abcd";
const algorithm = "HS256";
const jwtmw = exjwt({
    secret: secretkey,
    algorithms: [algorithm]
});
const client = new MongoClient('mongodb+srv://admin:admin@cluster0.bzwfiwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
client.connect();
const db = client.db('counselling');
const col = db.collection('register');

// Register endpoint
app.post('/register', async (req, res) => {
    try {
        await col.insertOne(req.body); // Wait for insertion to complete
        res.send('Inserted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Retrieve endpoint
app.get('/retrieve', jwtmw, async (req, res) => {
    console.log(jwt_decode.jwtDecode(req.headers.authorization.substring(7)))
    const result = await col.find().toArray();
    console.log(result);
    res.send(result);
});

// Update user endpoint
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, role, email, password } = req.body;
    const result = col.updateOne({ _id: new ObjectId(id) }, { $set: { name, role, email, password } });
    res.send('updated');
});

// Delete user endpoint
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const result = await col.deleteOne({ _id: new ObjectId(id) });
    res.json({ message: "deleted Successfully" });
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello World');
});

// About endpoint
app.get('/about', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email in the database
        const user = await col.findOne({ email });

        // Check if the user exists and the password matches
        if (!user || password !== user.password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, secretkey, { algorithm, expiresIn: '1h' });

        // Send the token as a response
        res.json({ username: user.name, token });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Start the server
app.listen('8085', () => {
    console.log('Server is Running');
});
