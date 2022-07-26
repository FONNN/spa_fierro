import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = () => {
  return (
    <div>
      ItemDetail
      <ItemCount initial={1} stock={15} onAdd />
    </div>
  )
}

export default ItemDetail