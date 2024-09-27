
const config = require('./config')
const DB_URL = config.DB_URL;
const mongoose = require('mongoose');

const dbConnect= async ()=>{
    try{
        await mongoose.connect(DB_URL); 
        console.log("db connected succussfully")
        return "db connected succussfully";
    }catch(err){
        console.log("err",err.message)
        return err.message;
    }
}

module.exports={dbConnect}