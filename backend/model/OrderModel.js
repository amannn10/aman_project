import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    Username: {
      type: String,
    },
    Email: {
      type: String,
    },
    Product_id: {
      type: String,
    },
    Area: {
      type: String,
    },
    Building: {
      type: String,
    },
    City: {
      type: String,
    },
    Pincode: {
      type: String,
    },
    State: {
      type: String,
    },
    Street: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model('Orders', OrderSchema);
export default Order;
