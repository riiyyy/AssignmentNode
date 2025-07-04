const userModel = require("../models/user");

const getAllUsers = async (req, res) => {
    const allusers = await userModel.find({})

    res.status(200).json({
        message: "all users fetched",
        allusers
    })
}

const getUserById=async(req,res)=>{
    const id=req.params.id;
    const user=await userModel.findById(id);
    if(!user){
        return res.status(404).json({message:"user not found"})
        }
}
const createUser=async (req, res) => {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
        message: "user created",
        user: newUser
    });
}
const updateUser=async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const updatedUser = await userModel
        .findByIdAndUpdate(id, { name, email }, { new: true });
    if (!updatedUser) {
        return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({
        message: "user updated",
        user: updatedUser
    });
}
const deleteUser=async (req, res) => {
    const id = req.params.id;
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
        return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({
        message: "user deleted",
        user: deletedUser
    });
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}