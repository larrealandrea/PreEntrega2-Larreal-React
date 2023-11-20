import React, { useState, useEffect } from "react"
import { getProducts, getProductById } from "../../../asynMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


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
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>

    )
} 
export default ItemListContainer