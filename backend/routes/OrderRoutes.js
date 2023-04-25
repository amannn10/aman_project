import Order from '../model/OrderModel.js';

import { Router } from 'express';

const router = new Router();

//Add Product
router.post('/', async (req, res) => {
  try {
    const newOrder = new Order({ ...req.body });

    await newOrder.save();

    res.status(200).json({
      message: 'Order Placed Successfully',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//Edit Product
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     if (updatedProduct) {
//       res.status(200).json({
//         message: 'Updated Product Successfully',
//       });
//     } else {
//       res.status(200).json({
//         message: 'Product Not Updated',
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// });

//Delete Product
// router.delete('/:id', async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json({
//       message: 'Product has been deleted',
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// });

//View Product
// router.get('/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.status(200).json({
//       message: 'Product Detail',
//       data: product,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// });

export default router;
