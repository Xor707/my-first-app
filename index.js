// index.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Sample data 
const products = [
  { id: 1, name: 'Product 1', price: 19.99, category: 'Clothing' },
  { id: 2, name: 'Product 2', price: 29.99, category: 'Shoes' },
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get details of a specific product
app.get('/api/products/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Search for products based on a query
app.get('/api/search', (req, res) => {
  const query = req.query.q;
  const matchingProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  res.json(matchingProducts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
