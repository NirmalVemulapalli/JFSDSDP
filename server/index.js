const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const jwt=require('jsonwebtoken')
const {expressjwt: exjwt}=require('express-jwt');
const jwt_decode=require('jwt-decode')
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());
secretkey="abcd"
algorithm="HS256"
const jwtmw=exjwt({
    secret: secretkey,
    algorithms: [algorithm]
})
const client = new MongoClient('mongodb+srv://admin:admin@cluster0.bzwfiwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
client.connect();
const db = client.db('counselling');
const col = db.collection('register');

app.post('/register', async (req, res) => {
    try {
        await col.insertOne(req.body); // Wait for insertion to complete
        res.send('Inserted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/retrieve', jwtmw, async (req, res) => {
    console.log(jwt_decode.jwtDecode(req.headers.authorization.substring(7)))
    const result = await col.find().toArray();
    console.log(result);
    res.send(result);

});
app.put('/users/:id',async (req,res)=>{
    const {id}=req.params
    const {name, role, email, password}=req.body
    const result= col.updateOne({_id: new ObjectId(id)},
    {$set: {name, role, email, password}})
    res.send('updated')
}
    )
app.delete('/users/:id',async(req,res)=> {
    const {id}=req.params
    const result= await col.deleteOne({_id: new ObjectId(id)})
    res.json({message:"deleted Successfully"})
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen('8080', () => {
    console.log('Server is Running');
});

app.post('/login', async (req,res) =>{
    const {email, password } = req.body;
    console.log(req.body)
    const user = await col.findOne({email });
    console.log(user.email, user.password, password)
    if(!user || !(password===user.password)){
        return res.status(401).json({message:'Invali email or password'})
    }
    const token = jwt.sign(user, secretkey,{algorithm:algorithm,expiresIn:'1m'});
    res.json({ username: user.name, token:token});
    });