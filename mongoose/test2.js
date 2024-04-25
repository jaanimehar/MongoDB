const express = require("express");
const config = require('./ecom');
const ProductDetail = require('./ecom');
const app = express();
app.use(express.json());
// post
app.get('/search/:key', async(req, res) => {
    const result=await ProductDetail.find({
        "$or":[
            {"product_name":{$regex:req.params.key}}

        ]
    });
    res.send(result);
})
app.listen(3000);

