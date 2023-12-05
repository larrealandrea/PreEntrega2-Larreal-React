import React from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState([])
    
    console.log (cart)

    const addItem = (item, quantity)=>{
        if(!isInCart(item.sku)){
            setCart (prev => [...prev,{...item,quantity}])
        } else{
            console.error ("Producto ya fue agregado")
        }
    }

    const removeItem = (itemSku) =>{
        const cartUpdated = cart.filter(prod => prod.sku !== itemSku)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart ([])
    }

    const isInCart = (itemSku) =>{
        return cart.some (prod => prod.sku === itemSku)
    }
    
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )

    }