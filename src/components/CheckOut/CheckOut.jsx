import { useContext, useState } from "react"
import { CartContext } from "../../Context/cartContext"
import { Timestamp, collection, getDocs, writeBatch } from "firebase/firestore"
import CheckOutForm from "../CheckOutForm/CheckOutForm"
import styles from "../ItemListContainer/ItemListContainer.module.css"

const CheckOut = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart}  = useContext(CartContext)

    const createOrder = async ({nombre, telefono, correo}) =>{
        setLoading (true)

        {
            const objOrder ={
                comprador: {
                    nombre, telefono, correo
                },
                items: cart,
                total: total, 
                date: Timestamp.frontDate (new Date())
            }

            const batch = writeBatch()

            const outOfStock = []

            const ids = cart.map(prod => prod.sku)

            const productsRef = collection(db, 'Productos')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach( doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productsAddedToCart = cart.find(prod => prod.sku === doc.sku)
                const prodQuantity= productsAddedToCart?.quantity 

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({sku: doc.sku, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId =(orderAdded.sku)
                clearCart()
            } else{
                console.error('hay productos fuera de stock')
            }

        }
    }


    if(loading){
        return <h1>Se esta generando su orden..</h1>
    }

    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return(
        <div>
            <h1 className={styles.Bienvenidos}>Check Out</h1>
            <CheckOutForm onConfirm={createOrder}/>
        </div>
    )
}

export default CheckOut
