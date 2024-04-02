const mongoose = require('mongoose');
// connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

// schema
const ecomSchema = new mongoose.Schema({
    product_name: String,
    price: Number,
    brand: String
});
// model
const  Product_data= new mongoose.model('product_data', ecomSchema);
module.exports=Product_data;
