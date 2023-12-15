import React, { useContext } from 'react'
import styles from "./CartItem.module.css"
import { CartContext } from '../../Context/cartContext';



// [
//   {
//       "sku": "5",
//       "name_product": "Zapatos blancos",
//       "price": 22990,
//       "quantity": 3
//   },
//   {
//       "sku": "11",
//       "name_product": "Body de frutas",
//       "price": 4990,
//       "quantity": 3
//   }
// ]


export default function ({sku,name_product, price, quantity, img}) {

  const {removeItem} = useContext(CartContext);


  return (
    <div className={styles.tarjeta}>

        <img src={img} alt={name_product} />
        <h3>{name_product}</h3>
        <p>{quantity}</p>
        <h2>precio unitario<span>$ </span>{price}</h2>
        <h2>precio total<span>$ </span>{price * quantity}</h2>
        <button onClick={() => removeItem(sku, quantity)}>X</button>
    </div>
  )
}

