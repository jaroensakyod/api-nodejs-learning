import express  from 'express';
import ProductsRouter from "./modules/product/product.route.js";
import UserRouter from './modules/user/user.route.js';

const AppRouter = express()

AppRouter.use('/product', ProductsRouter)
AppRouter.use('/user', UserRouter)


export default AppRouter


