const axios = require('axios');


const baseUrl = "https://www.myntra.com"
const apiKey = '1234567890';
const productId = '12345';
const searchQuery = 'shoes';
const userCredentials = { username: 'pushpa_yadav', password: '1234567890' };

// Function to get a list of products
async function getProductList() {
  const url = `${baseUrl}/products`;
  const headers = { Authorization: `Bearer ${apiKey}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching product list:', error.message);
    throw error;
  }
}

// Function to get product details by ID
async function getProductDetails(productId) {
  const url = `${baseUrl}/products/${productId}`;
  const headers = { Authorization: `Bearer ${apiKey}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error.message);
    throw error;
  }
}

// Function to search for products
async function searchProducts(query) {
  const url = `${baseUrl}/products/search?q=${query}`;
  const headers = { Authorization: `Bearer ${apiKey}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Error searching for products:', error.message);
    throw error;
  }
}

// Function for user authentication
async function authenticateUser(credentials) {
  const url = `${baseUrl}/authenticate`;
  const headers = { Authorization: `Bearer ${apiKey}` };

  try {
    const response = await axios.post(url, credentials, { headers });
    return response.data;
  } catch (error) {
    console.error('Error authenticating user:', error.message);
    throw error;
  }
}

// Example usage
getProductList().then(productList => {
  console.log('Product List:', productList);
});

getProductDetails(productId).then(productDetails => {
  console.log('Product Details:', productDetails);
});

searchProducts(searchQuery).then(searchResults => {
  console.log('Search Results:', searchResults);
});

authenticateUser(userCredentials).then(authToken => {
  console.log('Authentication Token:', authToken);
});
