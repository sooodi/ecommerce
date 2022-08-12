import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  paymentId: {
    type: String,
    required: true
  },
  shipAddress: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  delivery: {
    type: String,
    default: "Pending"
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
});
