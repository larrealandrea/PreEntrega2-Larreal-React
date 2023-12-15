import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext';
import styles from "../Cart/Cart.module.css"

import CartItem from '../CartItem/CartItem';

import { NavLink } from 'react-router-dom';


export default function Cart() {




    const {cart, clearCart} = useContext(CartContext);

    function removeAll(){
        clearCart()
    
    }
    
    const total = cart.length;

    return total != 0 ?(
        
        
        <div className={styles.cart}>
            <section className={styles.items}>
                <div>          
                    {cart.map((p)=>(<CartItem key={p.sku} sku={p.sku} name_product={p.name_product} price={p.price} img={p.img} quantity={p.quantity}/>))}
                </div>
                <button className={styles.emptyBtn} onClick={() => removeAll()}>Vaciar  carrito</button>

                <NavLink to={`/checkout`} className={styles.homeLink}>
                <button className={styles.homeBtn}>Chek out</button>
            </NavLink>
            </section>
        </div>
    ) : (
        <div className={styles.no_cart}>
            <p className={styles.emptyTxt}>Carrito vacio</p>
            <NavLink to={`/`} className={styles.homeLink}>
                <button className={styles.homeBtn}>Continuar comprando</button>
            </NavLink>
            
        </div>
    );
}