import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = ({ greeting }) => {

  return (
    <div>
      <ItemCount />
      {greeting}
    </div>
  )
}

export default ItemListContainer