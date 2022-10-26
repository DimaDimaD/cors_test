const express = require('express');

const cors = require('cors');
const options = {
    origin: ['http://localhost:3000','http://localhost:8080'],
}

const colors = require('./colors.json')
const PORT = 5000;


const app = express();


app.use(cors(options))

app.get('/',(req,res)=>{
    console.log(colors)
    res.send('Welcome to NodeJS + Express CORS Server! 🎈')
})

app.get('/colors',cors(), (req,res)=>{
    // res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(colors)
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})