const express = require('express');
const dbconnection = require('./connectionapp');
const app = express();

app.use(express.json());
// put api 
app.put('/:id', async (req, res) => {
    const db = await dbconnection();
    const result = await db.updateMany({id:req.params._id},{$set:req.body});
    res.send(result);
});
// patch api
app.patch('/:name', async (req, res) => {
    const db = await dbconnection();
    const result = await db.updateOne({name:req.params.name},{$set:req.body});
    res.send(result);
});
app.listen(5000);