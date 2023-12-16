import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from '../ItemDetail/ItemDetail.module.css'
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";

const ItemDetail = ({ sku, name_product, img, price, stock, category, description }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            sku, name_product, price, img
        }

        addItem(item, quantity)
    }


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
                    Sku: {sku}
                </p>
                <p className={styles.Info}>
                    Descripcion: {description}
                </p>
                <p className={styles.Info}>
                    Categoria: {category}
                </p>
                <p className={styles.Info}>
                    Stock: {stock}
                </p>
                <p className={styles.Info}>
                    Precio: ${price}
                </p>

            </div>
            <div className={styles.ItemFooter}>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className={styles.button}>Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)} />
                    )
                }

            </div>
        </div>
    )

}

export default ItemDetail