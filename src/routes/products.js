const express = require('express');
const { getProducts, addProduct, updateProduct, deleteProduct, searchProduct } = require('../controllers/productsController');
const router = express.Router();

router.get('/', getProducts);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/search', searchProduct);

module.exports = router;
