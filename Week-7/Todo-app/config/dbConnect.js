
const config = require('./config')
const DB_URL = config.DB_URL;
const mongoose = require('mongoose');

const dbConnect= async (req,res)=>{
    try{
        await mongoose.connect(DB_URL); 
        return "db connected succussfully";
    }catch(err){
        return err.message;
    }
}

module.exports={dbConnect}