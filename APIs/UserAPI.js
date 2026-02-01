import exp from 'express'
import {UserModel} from '../Models/UserModel.js'

export const userApp = exp.Router()


//create user
userApp.post('/users', async(req, res) => {
    //get newuser from req 
    let newUser= req.body;
    //create newuser document
    let newUserDoc = new UserModel(newUser);
    //save in db
    await newUserDoc.save();
    //send response
    res.status(201).json({message: "user created"})
});

//read user
// userApp.get('/users', async(req, res) => {
//     //read users from db
//     let usersList = await UserModel.find()
//     res.status(200).send({message: "Users", payload: usersList})
// })

    //read user by obj id
    userApp.get('/users/:id', async(req, res) => {
        //get obj id from url parameter
        let objId = req.params.id;
        //find user in db
        let userObj = await UserModel.findById(objId);
        //send response
        res.status(200).json({message: "User", payload: userObj})

})

//update user 
userApp.put('/users/:id', async(req, res) => {
    //get obj id from url parameter
    let objId = req.params.id;
    //get updated user from req body
    let ModifiedUser = req.body; 
    //update user in db
    let latestUser =await UserModel.findByIdAndUpdate(objId, {$set: {...ModifiedUser}}, {new: true});
    //send response
    res.status(200).json({message: "User modified", payload: latestUser})
})

//delete user

userApp.delete('/users/:id', async(req, res) => {
    //get obj id from url parameter
    let objId = req.params.id;
    //delete user from db
    let deletedUser = await UserModel.findByIdAndDelete(objId);
    //send response
    res.status(200).json({message: "User removed", payload: deletedUser})

})
