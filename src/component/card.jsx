import React from "react";

const ProductItem = ({id, name, stock, price, quantity, total, increment, decrement}) => {
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{stock}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{total}</td>
            <td>
              <button onClick={() => decrement(id)}>-</button>
              <button onClick={() => increment(id)}>+</button>
            </td>
          </tr>
    )
}

export default ProductItem;