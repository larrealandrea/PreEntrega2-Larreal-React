import React from 'react'
import styles from '../Item/Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ sku, name_product, img, price, stock, id }) => {


    return (
        <div className={styles.CardItem}>
            <header className={styles.Header}>
                <h2 className={styles.ItemHeader}>
                    {name_product}
                </h2>
            </header>

            <picture>
                <img src={img} alt={name_product} className={styles.ItemImg} />
            </picture>
            <div>
                <p className={styles.Info}>
                    Precio: $ {price}
                </p>
                <p className={styles.Info}>
                    Stock disponible: {stock}
                </p>
            </div>
            <div className={styles.ItemFooter}>
                <Link to={`/item/${id}`} className={styles.button}>Ver detalle</Link>
            </div>
        </div>
    )

}

export default Item