const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 9000;

app.use(bodyParser.json());

// Sample data
let users = [];
let products = [];
let carts = [];
let wishlists = [];
let orders = [];
let categories = [
  { category_id: 1, name: 'Electronics', description: 'A category for electronic devices.' },
  { category_id: 2, name: 'Clothing', description: 'A category for clothing items.' },
  { category_id: 3, name: 'Books', description: 'A category for books.' }
];

// User Authentication
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
});

app.post('/api/auth/register', (req, res) => {
  
  const { username, email, password } = req.body;
  
});

// User Profile
app.get('/api/users/:user_id', (req, res) => {

  const userId = parseInt(req.params.user_id);
 
});

// Product Management
app.get('/api/products', (req, res) => {  
});

app.get('/api/products/:product_id', (req, res) => {
  
  const productId = parseInt(req.params.product_id);

});

app.get('/api/products/search', (req, res) => {

  const { name, brand, price } = req.query;
 
});
app.post('/api/cart/add', (req, res) => {
  
  const { cart_id, user_id, items } = req.body;
 
});

app.post('/api/wishlist/add', (req, res) => {
  
  const { user_id, product_id } = req.body;
 
});

app.delete('/api/wishlist/remove', (req, res) => {
  
  const { user_id, product_id } = req.body;
 
});

// Order Management
app.get('/api/orders/history', (req, res) => {
  
  const { user_id } = req.query;
  ;
});

// Payment
app.post('/api/payment/initiate', (req, res) => {
  const { payment_id } = req.body;
 
});

// Category Management
app.get('/api/categories', (req, res) => {
 
});

app.get('/api/categories/:category_id', (req, res) => {
 
  const categoryId = parseInt(req.params.category_id);
 
});

app.delete('/api/categories/delete/:category_id', (req, res) => {
  
  const categoryId = parseInt(req.params.category_id);
  
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
