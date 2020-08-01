const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');
const url = 'mongodb://localhost:27017/crud';

const app = express();

const alienRouter = require('./routes/aliens')

//DB connection
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });



//Middleware
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

//My Routes
app.use('/alien', alienRouter)


//PORT
const port = 8000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});