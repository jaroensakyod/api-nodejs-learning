import express from 'express';
import ProductsControllers from './controllers/product.controllers.js';
import { createValidator } from 'express-joi-validation';
import { createProductBto } from './dto/create.product.dto.js';
import { updateProductBto } from './dto/update.product.dto.js';
import { ProductParamsDto } from './dto/update.product.dto.js';

const ProductsRouter = express.Router()
const validater = createValidator({})

ProductsRouter.get('/', ProductsControllers.getProduct)
ProductsRouter.get('/:id', ProductsControllers.getProductById)
ProductsRouter.post('/',
                    validater.body(createProductBto),
                    ProductsControllers.createProduct
                    )
ProductsRouter.patch('/:id',
                    validater.params(ProductParamsDto),
                    validater.body(updateProductBto),
                    ProductsControllers.UpdateProduct
                    )

export default ProductsRouter