import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = ({ greeting }) => {

  return (
    <div>
      <ItemCount initial={1} stock={15} onAdd/>
      {greeting}
    </div>
  )
}

export default ItemListContainer