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
                <NavLink to={`/category/vestidos`} className={navStyle}>Vestidos</NavLink>
                <NavLink to={`/category/zapatos`} className={navStyle}>Zapatos</NavLink>
                <NavLink to={`/category/accesorios`} className={navStyle}>Accesorios</NavLink>
                <NavLink to={`/category/liquidacion`} className={navStyle}>Liquidacion</NavLink>
                <CartWidget/>
            </div>
       
        </nav>
        
    )
}

export default NavBar 