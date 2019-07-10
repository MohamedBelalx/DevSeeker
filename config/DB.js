const config = require('config');
const mongoose = require('mongoose');
const db = config.get('mongoURI');

const connectDb = async ()=>{
    try{
        await mongoose.connect(db,{useNewUrlParser:true});
        console.log('mongo conncet great!...')
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDb;
