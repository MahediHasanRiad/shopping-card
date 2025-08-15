import React, { useState } from "react";
import "./shopping.module.css";
import ProductItem from "./component/card";
import ProductsData from "./component/data";

const ShoppingCard = () => {
  const [products, setProduct] = useState(
    ProductsData.map((product) => {
      return {
        ...product,
        quantity: 0,
        total: 0,
      };
    })
  );

  const incrementQuantity = (id) => {
    const newProduct = products.map((product) => {
      if (product.id === id && product.stock > 0) {
        product.quantity++;
        product.stock--;
        product.total = product.quantity * product.price;
      }
      return product;
    });
    setProduct(newProduct);
  };

  const decrementQuantity = (id) => {
    const newProduct = products.map((product) => {
      if (product.id === id && product.quantity > 0) {
        product.quantity--;
        product.stock++;
        product.total = product.quantity * product.price;
      }
      return product;
    });
    setProduct(newProduct);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Stock</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <ProductItem
              key={item.id}
              {...item}
              increment={incrementQuantity}
              decrement={decrementQuantity}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCard;
