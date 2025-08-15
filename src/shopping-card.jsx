import React from "react";
import { useState } from "react";
import ProductsData from "./component/data";
import Card from "./component/card";
import "./shopping.module.css";

const ShoppingCard = () => {
  const [product, setProduct] = useState(
    ProductsData.map((item) => {
      return {
        ...item,
        quantity: 0,
        total: 0,
      };
    })
  );

  const incrementItem = (id) => {
    const newProduct = product.map(item => {
      if(item.id === id && item.stock > item.quantity){
        item.quantity++
        item.total = item.quantity * item.price
      }
      return item
    })

    setProduct(newProduct)
  }

  const decrementItem = (id) => {
    const newItem = product.map(item => {
      if(item.id === id && item.quantity > 0){
        item.quantity--
        item.total = item.quantity * item.price
      }
      return item
    })

    setProduct(newItem)
  }

  return (
    <div style={{ width: "50%", margin: "auto" }}>
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
          {product.map((product) => (
            <Card key={product.id} {...product} increment={incrementItem} decrement={decrementItem}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCard;
