import mongoose from '../../../common/database/mongoose.db.js';


const { Schema, model } = mongoose
const ProductsSchema = new Schema({
          name: {
                    type: String,
                    required: true
          },
          price: {
                    type: Number,
                    default: 0
          }
}, { timestamps: true})

const ProductModel = model('products', ProductsSchema)

export default ProductModel