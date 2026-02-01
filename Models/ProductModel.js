//create product schema
import { Schema, model } from 'mongoose'
const productSchema = new Schema({
    pname : {
        type: String,
        required: [true, 'Product name is required']
    },
    price : {
        type: Number,
        required: [true, 'Product price is required']
    },
    brand : {
        type: String,
        required: [true, 'Product brand is required']
    }
    
});

//create product model with that schema
export const ProductModel = model("product", productSchema)

