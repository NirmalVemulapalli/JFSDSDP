const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const { expressjwt: exjwt } = require('express-jwt');
const jwt_decode = require('jwt-decode');

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // JSON body parsing middleware

// MongoDB Connection
const secretkey = "abcd";
const algorithm = "HS256";
const jwtmw = exjwt({
    secret: secretkey,
    algorithms: [algorithm]
});

// MongoDB URI and connection options
const uri = 'mongodb+srv://<admin>:<admin>@cluster0.bzwfiwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri, {
    ssl: false, // Enable SSL for secure connection
    tlsAllowInvalidCertificates: true, // Allows invalid certificates (useful for testing environments)
    serverSelectionTimeoutMS: 5000, // Optional: Adjust timeout as per your needs
    socketTimeoutMS: 45000, // Optional: Adjust socket timeout if needed
});

client.connect()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

const db = client.db('counselling');
const col = db.collection('register');

// Register endpoint
app.post('/register', async (req, res) => {
    try {
        await col.insertOne(req.body); // Insert new user data
        res.send('Inserted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Retrieve endpoint
app.get('/retrieve', jwtmw, async (req, res) => {
    try {
        console.log(jwt_decode.jwtDecode(req.headers.authorization.substring(7)));
        const result = await col.find().toArray();
        res.send(result);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Update user endpoint
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, role, email, password } = req.body;
    try {
        await col.updateOne({ _id: new ObjectId(id) }, { $set: { name, role, email, password } });
        res.send('User updated successfully');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// Delete user endpoint
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await col.deleteOne({ _id: new ObjectId(id) });
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await col.findOne({ email });

        if (!user || password !== user.password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, secretkey, { algorithm, expiresIn: '1h' });
        res.json({ username: user.name, token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello World');
});

// About endpoint
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>');
});

// Start the server
app.listen(8085, () => {
    console.log('Server is running on port 8085');
});
