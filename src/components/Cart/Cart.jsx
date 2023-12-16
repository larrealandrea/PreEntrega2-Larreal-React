import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext';
import styles from "../Cart/Cart.module.css"
import CartItem from '../CartItem/CartItem';
import { NavLink } from 'react-router-dom';

export default function Cart() {

    const { cart, clearCart } = useContext(CartContext);

    function removeAll() {
        clearCart()

    }

    const total = cart.length;

    return total != 0 ? (

        <div className={styles.cart}>
            <section className={styles.items}>

                {cart.map((p) => (<CartItem key={p.sku} sku={p.sku} name_product={p.name_product} price={p.price} img={p.img} quantity={p.quantity} />))}

            </section>
            <button className={styles.button} onClick={() => removeAll()}>Vaciar  carrito</button>

            <NavLink to={`/checkout`}>
                <button className={styles.button}>Check out</button>
            </NavLink>
        </div>
    ) : (
        <div>
            <p className={styles.cart}>Carrito vacio</p>
            <NavLink to={`/`} >
                <button className={styles.button}>Continuar comprando</button>
            </NavLink>

        </div>
    );
}