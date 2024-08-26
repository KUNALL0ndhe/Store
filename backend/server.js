import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import products from './data/products.js';
import connectDB from './config/db.js';

dotenv.config(); // To Load all configuration in .env file at first

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((prod) => prod._id === req.params.id);
    res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgCyan.bold);
});