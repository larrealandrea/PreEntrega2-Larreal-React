import React, { useState, useEffect } from "react"
import { getProducts, getProductById } from "../../../asynMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import styles from '../ItemListContainer/ItemListContainer.module.css'

const ItemListContainer = ({greeting}) =>{


    const [products, setProducts] = useState([])

    const {categorySku} = useParams()
    useEffect (() => {
    
        getProducts(categorySku)
            .then(response => {
                setProducts(response)
            })
        .catch(error =>{
            console.error(error)
        })
    }, [categorySku])

    return(
        <div>
            <h1 className={styles.Bienvenidos}>{greeting}</h1>
            <ItemList products={products}/>
        </div>

    )
} 
export default ItemListContainer