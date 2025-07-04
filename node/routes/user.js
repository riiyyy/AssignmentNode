const express = require("express")
const userRouter = express.Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/user")

userRouter.get('/user',getAllUsers)
userRouter.get('/:id',getUserById)
userRouter.post('/',createUser)
userRouter.patch('/:id',updateUser)
userRouter.delete('/:id',deleteUser)

module.exports = userRouter;

