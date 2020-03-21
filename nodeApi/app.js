const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressValidator = require('express-validator');


connectDB();
//bring in routes
const eventRoutes = require('./routes/event')

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
//app.use(expressValidator);
app.use("/",eventRoutes);

const Port = process.env.PORT || 8080;

app.listen(Port, () =>{
    console.log(`A NODE Js API is listening on port: ${Port}`)
});