import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: 'Category',
  },
  image: {
    type: String,
    default: 'https://www.freeiconspng.com/uploads/no-image-icon-4.png',
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  stock: {
    type: Number,
    required: true
  },
  description: String,
  title:String,
  price: Number,
  discount:Number,
  created: {
    type: Date,
    default: Date.now,
  },
});
