const mongoose=require('mongoose');

// connection
mongoose.connect("mongodb://127.0.0.1:27017/Student");

// schema
const studentSchema=new mongoose.Schema({
    // define structure of document
    name:String,
    roll_no:Number,
    class:String,
    active:Boolean
});

//model
const Crud=new mongoose.model('crud',studentSchema);

// create data
async function createdata(){
    const data1= new Crud({
        name:"Seeta",
        roll_no:23
    });
    const data2= new Crud({
        name:"ram",
        roll_no:24
    });
    const result= await Crud.insertMany([data1, data2]);
    // const result= await data.save();
    console.log(result);
}
// createdata();

// update data
async function updatedata(){
    const result= await Crud.updateMany({}, {$set:{roll_no:3}});
    console.log(result);
}
// updatedata();

// read data
async function readdata(){
    const result= await Crud.find();
    console.log(result);
}
// readdata();

// delete data
async function deletedata(){
    const result= await Crud.deleteMany({roll_no:23});
    console.log(result);
}
deletedata();
