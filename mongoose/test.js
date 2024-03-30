const mongoose = require('mongoose');

async function connection(){
await mongoose.connect('mongodb://127.0.0.1:27017/student');
// schema
const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll_no:Number,
    class:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now

    }
});
// model
const Student= new mongoose.model("detail",studentSchema);
// add data in collection
const data= new Student({
    name:"Akbar",
    roll_no:12,
    class:"4th",
    active:true
});
const result=await data.save();
console.log(result);
}
connection();