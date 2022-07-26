import { useEffect } from 'react';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { task } from '../../helpers/task';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    task() //mock consulta api
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  // console.log(products);

  return (
    <div>
      {greeting}

        {loading ?
          <h1>
            <Spinner animation="grow" size="sm" variant="info" />{' '}
            <Spinner animation="grow" size="sm" variant="secondary" />{' '}
            <Spinner animation="grow" size="sm" variant="dark" />
          </h1>
          :
          <ItemList productos={products}/>
        }
      
    </div>
  )
}

export default ItemListContainer