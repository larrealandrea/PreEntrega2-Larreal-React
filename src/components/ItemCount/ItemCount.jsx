import React from 'react'
import styles from '../ItemCount/ItemCount.module.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) =>{
    const [quantity, setQuantity] = useState (initial)

    const increment = () =>{
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = ()=>{
        if (quantity>1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className={styles.Counter}>
            <div className={styles.Controls}>
                <button className={styles.button} onClick={(decrement)}>-</button>
                <h4 className={styles.Number}>{quantity}</h4>
                <button className={styles.button} onClick={(increment)}>+</button>
            </div>
            <div>
                <button className={styles.button} onClick={()=>{onAdd(quantity)}} disable={"false"}>Agregar al carrito</button>
            </div>
    
        </div>
    )
}


export default ItemCount
