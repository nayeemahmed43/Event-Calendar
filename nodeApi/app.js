const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();
const morgan = require("morgan");


connectDB();
//bring in routes
const eventRoutes = require('./routes/event')

//middleware
app.use(morgan("dev"));

app.use("/",eventRoutes);

const Port = process.env.PORT || 8080;

app.listen(Port, () =>{
    console.log(`A NODE Js API is listening on port: ${Port}`)
});