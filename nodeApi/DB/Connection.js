const mongoose = require('mongoose');

const URI ="mongodb+srv://dbUser:dbUserPassword@cluster0-wqgkr.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async() =>{
    await mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('DB Connected...');
}

module.exports = connectDB;