import connectToMongo from './db.js';
import express from 'express';

connectToMongo();

const app = express();
const port = 3000;

app.listen(port, () => { console.log(`Listening at http://localhost:${port}`) });

app.get('/', (req, res) => {
    res.send("Hello Express");
})