import express from 'express';
import UserController from './controllers/use.controllers.js';

const UserRouter = express.Router()

UserRouter.post('/',  UserController.addUser)
UserRouter.get('/', UserController.getAllUsers)

export default UserRouter