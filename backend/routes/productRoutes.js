import express from 'express';
import Product from '../models/productModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find({}); // to find everything in product
    res.json(products);
});

router.get('/:id', async (req , res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        console.error(`message: ${err.message}`)
    }
});

export default router;