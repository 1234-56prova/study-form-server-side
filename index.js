const express = require('express');

const cors = require('cors');

const jwt = require('jsonwebtoken');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config();

const port = process.env.PORT || 5000;


const app = express();


// middleware
app.use(cors());

app.use(express.json());

const uri = "mongodb+srv://Ilma:pretender@cluster0.asvv5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    try {

        await client.connect();

        const studytasksCollection = client.db("studyform").collection("studytasks");

        app.get('/studytasks', async (req, res) => {

            const cursor = await studytasksCollection.find(query);
            
            const tasks = await cursor.toArray();

            res.send(result);
            
        })
    }

    finally {

        // client.close();

    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Look Mama! I can code node now')
})

app.listen(port, () => {
    console.log('Listening to port', port);
})
