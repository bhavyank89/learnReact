const connectToMongo = require('./db')
const express = require('express')

connectToMongo();

const app = express();
const port = 3000

//Insteed of listing every routes in our index.js we use app.use
// app.get('/', (req, res) => { res.send('Hello World!') })

//Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})