const dbconnection=require('./connectionapp');
const express=require('express');
const app= express();
app.use(express.json());
// patch api
app.patch('/:name', async (req, res) => {
    const db = await dbconnection();
    const result = await db.updateMany({name:req.params.name},{$set:req.body})
    res.send(result);
});
app.listen(5000);

 