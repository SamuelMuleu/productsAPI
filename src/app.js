const express = require('express');
const productsRoutes = require('./routes/products');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/products', productsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
