import connectToMongo from './db.js';
import express from 'express';
import cors from 'cors';

connectToMongo();

const app = express();
const port = 5000;
app.use(cors());
// cors is a package used to make fetch request to a url using browser

app.listen(port, () => { console.log(`Listening at http://localhost:${port}`) });
app.use(express.json());

//Availabe Routes
import home from './routes/home.js';
app.use('/home', home);

import auth from './routes/auth.js';
app.use('/auth', auth);

import notes from './routes/notes.js';
app.use('/notes', notes);