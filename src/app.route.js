import express  from 'express';
import ProductsRouter from "./modules/product/product.route.js"; 

const AppRouter = express()

AppRouter.use('/product', ProductsRouter)


export default AppRouter


