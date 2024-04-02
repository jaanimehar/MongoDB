const express = require("express");
const config = require('./configfile');
const ProductDetail = require('./ecom');
const app = express();
app.use(express.json());
// post
app.post('/postdata', async(req, res) => {
    const data= new ProductDetail(req.body);
    const result=await data.save();
    res.send(result);
})
// get
app.get('/getdata', async(req, res) => {
    // const data= new ProductDetail(req.body);
    const result=await ProductDetail.find();
    res.send(result);
});
// put 
app.put('/putdata/:_id', async(req, res) => {
    const result=await ProductDetail.updateOne({_id:req.params}, {$set:req.body});
    res.send(result);
});
// delete
app.delete('/deletedata/:_id', async(req, res) => {
    const result=await ProductDetail.deleteOne(req.params);
    res.send(result);
});



app.listen(3000);

