const { loadData, saveData } = require('../utils/dataUtils');
const { v4: uuidv4 } = require('uuid');

const getProducts = (req, res) => {
    const products = loadData();
    res.status(200).json(products);
};


const addProduct = (req, res) => {
    const { name, category, stock, price } = req.body;
    if (!name || !category || !stock || !price) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const products = loadData();
    const newProduct = {
        id: uuidv4(),
        name,
        category,
        stock,
        price
    };

    products.push(newProduct);
    saveData(products);

    res.status(201).json({ message: "Produto adicionado", product: newProduct });
};


const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, category, stock, price } = req.body;
    const products = loadData();

    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Produto não encontrado' });
    }

    const updatedProduct = {
        id,
        name,
        category,
        stock,
        price
    };

    products[productIndex] = updatedProduct;
    saveData(products);

    res.status(200).json(updatedProduct);
};


const deleteProduct = (req, res) => {
    const { id } = req.params;
    const products = loadData();

    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Produto não encontrado' });
    }

    products.splice(productIndex, 1);
    saveData(products);

    res.status(200).json({ message: 'Produto excluído com sucesso' });
};


const searchProduct = (req, res) => {
    const { query } = req.query; 
    const products = loadData();

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) || product.id === query
    );

    if (filteredProducts.length === 0) {
        return res.status(404).json({ message: 'Nenhum produto encontrado' });
    }

    res.status(200).json(filteredProducts);
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct, searchProduct };
