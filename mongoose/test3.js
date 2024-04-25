const mongoose = require('mongoose');
// connection
mongoose.connect('mongodb://127.0.0.1:27017/form');

// schema
const ecomSchema = new mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    mobileno:{type:Number, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true },
    confirmpassword:{type:String, required:true},

});
// model
const  User_data= new mongoose.model('user_data', ecomSchema);
module.exports=User_data;
