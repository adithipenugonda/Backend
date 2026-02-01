import exp from 'express'
import {ProductModel} from '../Models/ProductModel.js'
export const productApp = exp.Router()

//create product
productApp.post('/products', async(req, res) => {
    //get newproduct from req
    let newProduct=req.body;
    //create newproduct document
    let newProductDoc = new ProductModel(newProduct);
    //save in db
    await newProductDoc.save();
    //send response
    res.status(201).json({message: "product created", payload: newProductDoc})
});

//read products
productApp.get('/products', async(req, res) => {
    //read products from db
    let productsList = await ProductModel.find()
    res.status(200).send({message: "Products", payload: productsList})
})

//read product by obj id
productApp.get('/products/:id', async(req, res) => {
    //get obj id from url parameter
    let objId = req.params.id;
    //find product in db
    let productObj = await ProductModel.findById(objId);
    //send response
    res.status(200).json({message: "Product", payload: productObj})
})

//update product
productApp.put('/products/:id', async(req, res) => {
    //get obj id from url parameter
    let objId = req.params.id;
    //get updated product from req body
    let ModifiedProduct = req.body;
    //update product in db
    let latestProduct = await ProductModel.findByIdAndUpdate(objId, {$set: {...ModifiedProduct}}, {new: true});
    //send response
    res.status(200).json({message: "Product modified", payload: latestProduct})
})

//delete product
productApp.delete('/products/:id', async(req, res) => {
    //get obj id from url parameter
    let objId = req.params.id;
    //delete product from db
    let deletedProduct = await ProductModel.findByIdAndUpdate(objId);
    //send response
    res.status(200).json({message: "Product removed", payload: deletedProduct})
})
