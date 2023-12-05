import React from 'react'
import styles from '../ItemList/ItemList.module.css'
import Item from '../Item/Item'

const ItemList = ({products}) =>{

  return(
    <div className={styles.ListGroup}>
      {products?.map(prod => <Item key={prod.sku}{...prod}/>)}
    </div>
  )
}

export default ItemList