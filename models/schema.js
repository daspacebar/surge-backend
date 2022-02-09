const mongoose = require('mongoose');

const DBSchema = new mongoose.Schema({
    userPhone:{
        type: Number
    },
    transactionAmount:{
        type: Number
    },
    timestamp:{
        time : { type : Date, default: Date.now }
    }
});

const Parameters =  mongoose.model("Parameters", DBSchema);
module.exports = Parameters; 