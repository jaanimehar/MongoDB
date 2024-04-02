const mongoose = require('mongoose');
// connection
mongoose.connect('mongodb://127.0.0.1:27017/student');

// schema
const studentSchema = new mongoose.Schema({
    name: String,
    roll_no: Number,
    class: String
});
// model
const StudentData = new mongoose.model('student_data', studentSchema);

// create data
async function credatedata() {
    const data1 = new StudentData({
        name: "Seeta",
        roll_no: 12,
        class: "MSW"
    });
    const data2= new StudentData({
        name: "geeta",
        roll_no: 125,
        class: "MSWt"
    });
    const data3= new StudentData({
        name: "reeta",
        roll_no: 124,
        class: "MSWr"
    });
    const result= await StudentData.insertMany([data1, data2, data3]);
    console.log(result);
} 
// credatedata();

// read data
async function readdata(){
    const data= await StudentData.find();
    console.log(data);
}
// readdata();

// update data
async function updatedata(){
    const data= await StudentData.updateOne({name:"Seeta"}, {$set:{name:"Radha"}});
    console.log(data);
}
// updatedata();

// deletedata
async function deletedata(){
    const data= await StudentData.deleteOne({name:"Seeta"});
    console.log(data);
}
deletedata();

