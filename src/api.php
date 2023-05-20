<?php

// Example data
$products = [
  ['id' => 1, 'name' => 'Product 1', 'price' => 10],
    ['id' => 2, 'name' => 'Product 2', 'price' => 20],
      ['id' => 3, 'name' => 'Product 3', 'price' => 30]
      ];

      // Set the response header to JSON
      header('Content-Type: application/json');

      // Return the products as JSON response
      echo json_encode($products);
      ?>