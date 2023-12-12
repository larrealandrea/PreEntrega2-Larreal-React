import { useContext, useState } from "react"
import { CartContext } from "../../Context/cartContext"
import { Timestamp, writeBatch } from "firebase/firestore"
import CheckOutForm from "../CheckOutForm/CheckOutForm"


const CheckOut = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart}  = useContext(CartContext)

    const createOrder = async ({nombre, telefono, correo}) =>{
        setLoading (true)

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

    }

    if(loading){
        return <h1>Se esta generando su orden..</h1>
    }

    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return(
        <div>
            <h1>Check Out</h1>
            <CheckOutForm onConfirm={createOrder}/>
        </div>
    )
}

export default CheckOut
