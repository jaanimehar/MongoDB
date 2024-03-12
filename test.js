const dbconnection=require('./connectionapp');
const express=require('express');
const app= express();

app.get('/', async(req,res)=>{
    const db=await dbconnection();

    const result=res.send(await db.insertOne({name:"mohan", roll_no:1, class:"12th"}));
});
app.post('/getdata', async(req, res)=>{
    const db=await dbconnetion();
    const result= await db.insertMany(req.body);
    res.send(result); 
    console.log(result);
});
app.put('/:name',async(req, res)=>{
    const db=await dbconnetion();
    const result= await db.updateOne({name:req.params.name}, {$set:req.body});
    res.send(result);  
});
app.delete('/:name',async(req, res)=>{
    const db=await dbconnetion();
    const result= await db.deleteMany({name: req.params.name});
    res.send(result); 


});
app.listen(5000);

