import CartWidget from "../CartWidget/CartWidget"
import icon from "../../assets/duraznologo.png"
import styles from "./NavBar.module.css"
import { Link, NavLink } from "react-router-dom"




const NavBar = ()=> {

    return (
        <nav className={styles.NavBar}>
            <div className={styles.imageng}>
                <Link to='/'> 
                <img className={styles.logoImg} src={icon} alt="logo de durazno kids"></img>
                </Link>  
            </div>

            <div className={styles.Categories}>
                <NavLink to={`/categories/vestidos`} className={styles.button}>Vestidos</NavLink>
                <NavLink to={`/categories/zapatos`} className={styles.button}>Zapatos</NavLink>
                <NavLink to={`/categories/accesorios`} className={styles.button}>Accesorios</NavLink>
                <NavLink to={`/categories/liquidacion`} className={styles.button}>Liquidacion</NavLink>
                <CartWidget/>
            </div>
       
        </nav>
        
    )
}

export default NavBar 