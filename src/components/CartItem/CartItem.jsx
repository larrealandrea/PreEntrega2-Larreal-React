import React, { useContext } from 'react'
import styles from "./CartItem.module.css"
import { CartContext } from '../../Context/cartContext';

export default function ({ sku, name_product, price, quantity, img }) {

  const { removeItem } = useContext(CartContext);

  return (
    <div className={styles.tarjeta}>
      <img src={img} alt={name_product} />
      <h2>{name_product}</h2>
      <h2>${price}</h2>
      <p>x{quantity}</p>
      <h2>${price * quantity}</h2>
      <button onClick={() => removeItem(sku, quantity)}>X</button>
    </div>
  )
}

