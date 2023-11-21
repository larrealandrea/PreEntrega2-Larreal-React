import CartWidget from "../CartWidget/CartWidget"
import icon from "../../assets/duraznologo.png"
import styles from "./NavBar.module.css"
import { Link, NavLink } from "react-router-dom"




const NavBar = ()=> {

    const navStyle =({isActive})=>  isActive? styles.buttonActive : styles.button

    return (
        <nav className={styles.NavBar}>
            <div className={styles.imageng}>
                <Link to='/'> 
                <img className={styles.logoImg} src={icon} alt="logo de durazno kids"></img>
                </Link>  
            </div>

            <div className={styles.Categories}>
                <NavLink to={`/categories/vestidos`} className={navStyle}>Vestidos</NavLink>
                <NavLink to={`/categories/zapatos`} className={navStyle}>Zapatos</NavLink>
                <NavLink to={`/categories/accesorios`} className={navStyle}>Accesorios</NavLink>
                <NavLink to={`/categories/liquidacion`} className={navStyle}>Liquidacion</NavLink>
                <CartWidget/>
            </div>
       
        </nav>
        
    )
}

export default NavBar 