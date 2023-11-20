import ItemCount from "../ItemCount/ItemCount";
import styles from '../ItemDetail/ItemDetail.module.css'

const ItemDetail = ({sku, name_product, img, price, stock, categories, description}) =>{

    return(
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
                Categoria: {categories}
            </p>
            <p className={styles.Info}>
                Stock disponible: {stock}
            </p>
            <p className={styles.Info}>
                Precio: ${price}
            </p>

        </div>
        <footer className={styles.ItemFooter}>
             <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
        </footer>
        </div>
    )

}

export default ItemDetail