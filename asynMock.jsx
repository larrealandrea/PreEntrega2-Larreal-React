

import products from "./data-dummy.json"


export const getProducts = (category) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.filter(x => !category || x.category === category))
        },500)
    })
}

export const getProductById = (productSku) =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            const product = products.find(prod=> prod.sku === Number(productSku))

            resolve(product)
        },500)
    })

}