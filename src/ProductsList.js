import React, { useState, useEffect } from 'react';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
              .then((response) => response.json())
                    .then((data) => setProducts(data))
                          .catch((error) => console.log(error));
                            }, []);

                              return (
                                  <div>
                                        <h2>Products List</h2>
                                              {products.map((product) => (
                                                      <div key={product.id}>
                                                                <h3>{product.name}</h3>
                                                                          <p>Price: ${product.price}</p>
                                                                                  </div>
                                                                                        ))}
                                                                                            </div>
                                                                                              );
                                                                                              };

                                                                                              export default ProductsList;
                                                                                              