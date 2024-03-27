const mongoose=require('mongoose');
async function connection(){
    // use connect method for connect node js and mongodb with mongoose
   await mongoose.connect('mongodb://127.0.0.1:27017')
   .then(()=>{
    console.log("connection is successfull with mongoDB");
   })
   .catch((error)=>{
    console.log(error);
   });
}
connection();