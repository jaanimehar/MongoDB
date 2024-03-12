const express = require('express');
const dbconnetion = require('./connectionapp');
const app = express();

app.use(express.json())
app.get('/getdata', async (req, res) => {
    const db = await dbconnetion();
    const result = await db.find().toArray();
    res.send(result);
});
// post api
app.post('/getdata', async (req, res) => {
    const db = await dbconnetion();
    // const result = await db.insertOne({ name: "Sohan", roll_no: 44, class: "4th" });
    // const result = await db.insertOne(req.body);
    const result = await db.insertMany(req.body);
    res.send(result);

});
// put api
app.put('/:class',async(req, res)=>{
    const db=await dbconnetion();
    // const result=await db.updateOne({name:req.params.name},{$set:req.body});
    const result=await db.updateMany({class:req.params.class},{$set:req.body});
    res.send(result);
    console.log(result);
});
// delete api
app.delete('/:class',async(req, res)=>{
    const db=await dbconnetion();
    // const result=await db.deleteOne({class:req.params.class});
    const result=await db.deleteMany({class:req.params.class});

    res.send(result);

})
app.listen(5000);