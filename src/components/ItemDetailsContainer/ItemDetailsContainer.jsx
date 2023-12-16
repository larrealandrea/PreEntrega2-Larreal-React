import { useEffect, useState } from 'react'
import styles from '../ItemDetailsContainer/ItemDetailsContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/client'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemSku } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'Productos', itemSku)

        getDoc(docRef)
            .then(response => {
                const data = response.data()


                const productsAdapted = { sku: response.sku, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemSku])

    return (
        <div className={styles.ItemDetailContainer}>
            {loading ? (
                <p className={styles.loading}>Cargando...</p>
            ) : (
                <ItemDetail {...product} />
            )}
        </div>
    )
}

export default ItemDetailContainer


