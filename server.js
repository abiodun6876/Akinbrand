// Example data
const products = [
  { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
      ];

      // API endpoint to fetch the products
      app.get('/api/products', (req, res) => {
        res.json(products);
        });