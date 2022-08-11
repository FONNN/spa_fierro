import { useEffect, useState } from 'react';
import { task } from '../../helpers/task';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'



const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  //designar lo indicado en el enrutado
  const { categoryid } = useParams()

  //*** traer producto por id ***
  useEffect( () => {
    const db = getFirestore()
    const queryProduct = doc(db, 'items', I8uMsCFL0phOF4QrI1Gk)
    getDoc(queryProduct)
    .then(resp => console.log(resp))
  }, [])
  //*** END traer producto por id ***

  // useEffect(() => {
  //   if (categoryid) {
  //     task() //mock consulta api
  //       .then(resp => setProducts(resp.filter(product => product.category === categoryid)))
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false))
  //   } else {
  //     task()
  //       .then(resp => setProducts(resp))
  //       .catch(err => console.log(err))
  //       .finally(() => setLoading(false))
  //   }
  // }, [categoryid])

  // const onAdd = (cant) => {
  //   console.log(`cant desde itemListContainer ${cant}`);
  // }

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
          <ItemList products={products}/>
        }
    </div>
  )
}

export default ItemListContainer