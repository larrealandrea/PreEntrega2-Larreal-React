import { useState } from "react"
import styles from '../CheckOutForm/CheckOutForm.module.css'

const CheckOutForm = ({onConfirm}) =>{
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')

    const handleConfirm = (evento) =>{
        evento.reventDefault()

        const userData={
            nombre, telefono, correo
        }

        onConfirm(userData)
    }

    return(
        <div className={styles.Container}>
            <form onSubmit={handleConfirm} className={styles.Form}>
                <label className={styles.Label}>
                    Nombre
                    <input 
                        type="text"
                        className={styles.Input}
                        value={nombre}
                        onChange={({target}) => setNombre (target.value)} />
                </label>
                <label className={styles.Label}>
                    Telefono
                    <input 
                        type="text"
                        className={styles.Input}
                        value={telefono}
                        onChange={({target}) => setTelefono (target.value)} />
                </label>
                <label className={styles.Label}>
                    Correo
                    <input 
                        type="text"
                        className={styles.Input}
                        value={correo}
                        onChange={({target}) => setCorreo (target.value)} />
                </label>
                <button className={styles.button} type="submit">Crear orden</button>
            </form>
        </div>
    )
}


export default CheckOutForm