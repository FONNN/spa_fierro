import { useEffect } from 'react';
import { useState } from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import { task } from '../../helpers/task';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'



const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  //designar lo indicado en el enrutado
  const { categoryid } = useParams()

  useEffect(() => {
    if (categoryid) {
      task() //mock consulta api
      .then(resp => setProducts(resp.filter(products => products.category === categoryid)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      task()
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [categoryid])

  console.log(categoryid);

  return (
    <div className='itemListContainer'>
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