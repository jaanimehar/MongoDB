const express = require('express');
const Product_data = require('./ecom');
const app = express();
app.use(express.json());
// post api
app.post('/createdata', async(req, res) => {
    const data = new Product_data(req.body);
    const result=await data.save();
    res.send(result);
});
// get api
app.get('/readdata', async(req, res) => {
    const result=await Product_data.find();
    res.send(result);
});
// put api
app.put('/updatedata/:_id', async(req, res) => {
    const result=await Product_data.updateOne({_id:req.params},{$set:req.body});
    res.send(result);
});
// delete api
app.delete('/deletedata/:_id', async(req, res) => {
    const result=await Product_data.deleteOne(req.params);
    res.send(result);
});

app.listen(3000);