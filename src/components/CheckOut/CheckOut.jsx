import { useContext, useState } from "react"
import { CartContext } from "../../Context/cartContext"
import { Timestamp, collection, getDocs, addDoc } from "firebase/firestore"
import { db } from "../../firebase/client"
import CheckOutForm from "../CheckOutForm/CheckOutForm"
import styles from "../ItemListContainer/ItemListContainer.module.css"
import { NavLink } from 'react-router-dom';

const CheckOut = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, clearCart } = useContext(CartContext)



    const createOrder = async ({ nombre, telefono, correo }) => {
        setLoading(true)


        const objOrder = {
            comprador: {
                nombre, telefono, correo
            },
            items: cart,
            date: Timestamp.fromDate(new Date())
        }

        const orderRef = collection(db, 'orders')

        const orderAdded = await addDoc(orderRef, objOrder)

        setOrderId(orderAdded.id)
        clearCart()
        setLoading(false)

    }


    if (loading) {
        return <h1>Se esta generando su orden..</h1>
    }

    if (orderId) {
        return <div><h1>El id de su orden es: {orderId}</h1>
            <NavLink to={`/`} className={styles.homeLink}>
                <button className={styles.homeBtn}>Seguir Comprando</button>
            </NavLink>

        </div>
    }

    return (
        <div>
            <h1 className={styles.Bienvenidos}>Check Out</h1>
            <CheckOutForm onConfirm={createOrder} />
        </div>
    )
}

export default CheckOut
