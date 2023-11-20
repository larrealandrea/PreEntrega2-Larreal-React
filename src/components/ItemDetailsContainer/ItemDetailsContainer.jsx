import {useEffect, useState } from 'react'
import styles from '../ItemDetailsContainer/ItemDetailsContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../../asynMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)

    const {itemSku}= useParams()

    useEffect (()=>{
        getProductById(itemSku)
            .then(response =>{

                console.log("r", response)
                setProduct(response)
            })
            .catch(error =>{
                console.error (error)
            })
    }, [itemSku])

    return(
        <div className={styles.ItemDetailContainer}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer


