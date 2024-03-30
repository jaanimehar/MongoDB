const mongoose=require('mongoose');

async function connection(){
    // use connect method for connect node js and mongodb with mongoose
   await mongoose.connect('mongodb://127.0.0.1:27017/Student')
   .then(()=>{
    console.log("connection is successfull with mongoDB");
   })
   .catch((error)=>{
    console.log(error);
   });
//    Schema:

//    1. A mongoose schemas defines the structure of the document, 
//      default value, validator
//    2. Contain list of fields.
//    3. how the data is organized,
//    4. How the element is related to each other.
//    5. data is stored in unstructured form.
//    6. for use schema data is put in structured form
 const studentSchema= new mongoose.Schema({
    name:String,
    roll_no:Number,
    Class:String,
    active:Boolean,
    date:{
        type:Date,
        default: Date.now
    }
 });
//  Model:
// 1. A mongoose model provide an interface to the database for
//   creating, updating, deleting, querying data of a collection 
//   document.
// 2. mongoose model connect node JS to MongoDB.
// 3. It use schema to connect node JS with MongoDB.
// 4. The mongoose.model() function of the mongoose module 
//    is used to create a collection of a particular database 
//    of MongoDB. 
// 5. The name of the collection created by the model function 
//    is always in plural format mean GFG to gfss and the created 
//    collection imposed a definite structure.

 const Detail=new mongoose.model('deatil',studentSchema);
//  add data in collection by using schema and model
const data= new Detail({
    name:"Ram",
    roll_no:1224,
    Class:"MBBS",
    active:true,
    // define extra property for proof validation apply by schema
    section:"A"

});
const result= await data.save();
console.log(result);

}
connection();