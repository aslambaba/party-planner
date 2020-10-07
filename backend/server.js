const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = process.env.MONGO_ALTAS;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connect = mongoose.connection;
connect.once('open', ()=> {
    console.log('MongoDB Connection Successfully !');
})

app.listen(port, () => {
    console.log('Server is running on ' + port);
});