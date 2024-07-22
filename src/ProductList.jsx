import { faker } from '@faker-js/faker';
import { createContext, useContext } from 'react';

const ProductList = () => {
  faker.seed(20);
  const products = createContext(
    [...Array(20)].map((_, index) => ({
      id: index + 1, // Add unique IDs
      name: faker.commerce.productName(),
      price: faker.commerce.price({
        df: '#,###.##', // Equivalent to the old `dec` argument (optional)
        min: 10, // Minimum price
        max: 100, // Maximum price
        symbol: '$', // Currency symbol (optional)
      }), // Set price range
      image: faker.image.Url, // Add images (optional)
      department: faker.commerce.department(), // Add department
      description: faker.commerce.productDescription(), // Add descriptions
      inStock: faker.number.int({ min: 0, max: 5 }),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.number.int({ min: 1, max: 5 }),
    }))
  );

  const provider = (children) => {
    return <products.Provider value={products}> children</products.Provider>;
  };

  return <div></div>;
};

export default ProductList;
