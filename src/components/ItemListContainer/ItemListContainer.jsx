import React, { useState, useEffect } from "react"
import { getProducts, getProductById } from "../../../asynMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import styles from '../ItemListContainer/ItemListContainer.module.css'
import {getDocs, collection, query, where} from 'firebase/firestore'
import { db } from "../../firebase/client"

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categorySku} = useParams()

    useEffect (() => {
        setLoading(true)

        const collectionRef = categorySku
            ? query(collection(db, 'Productos'), where('category', '==', categorySku))
            : collection(db, 'Productos')

        getDocs(collectionRef)
           .then(response =>{
                const productsAdapted = response.docs.map(doc=>{
                    const data = doc.data()
                    return{ sku: doc.sku, ...data}
                })
                setProducts (productsAdapted)
           })
           .catch(error=>{
                console.error (error)
           })
           .finally(()=>{
            setLoading(false)
           })

    }, [categorySku])

    return(
        <div>
            <h1 className={styles.Bienvenidos}>{greeting}</h1>

            {loading ? (
                <p className={styles.loading}>Cargando...</p>
            ) : (
                <ItemList products={products} />
            )}


        </div>

    )
} 
export default ItemListContainer