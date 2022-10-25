import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'



const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [bool, setBool] = useState(true)
  const [product, setProduct] = useState({})

  //designar lo indicado en el enrutado
  const { categoryid } = useParams()

  //*** traer producto por id forma 1***
        // useEffect( () => {
        //   const db = getFirestore() //<- trae el servicio de firestore (ya esta la conexion con firebase)

        //   const queryProduct = doc(db, 'items', 'I8uMsCFL0phOF4QrI1Gk')
        //   getDoc(queryProduct)
        //   .then(resp => setProducts( { id: resp.id, ...resp.data() }  ))
        // }, [])
        // console.log(products);
  //*** END traer producto por id forma 1***

  //*** traer producto por id forma 2***
        // useEffect(() => {
        //   const db = getFirestore()
        //   const queryCollection = collection(db, 'items')
        //   getDocs(queryCollection)
        //   .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() })) ))
        //   .catch( err => console.log(err) )
        //   .finally(() => setLoading(false))
        // }, [])
  //*** END traer producto por id forma 2***

  //*** traer producto por id forma 3 (query filtrada)***
        // useEffect(() => {
        //   const db = getFirestore()
        //   const queryCollection = collection(db, 'items')
        //   const qf = query(
        //     queryCollection,
        //     where('category', '==', 'shoes') )
        //   getDocs(qf)
        //   .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() } ))))
        //   .catch( err => console.log(err) )
        //   .finally(() => setLoading(false))
        // }, [])
  //*** END traer producto por id forma 3***

  //PRIMERA CONEXION CON BASE LOCAL task
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

  useEffect(() => {

    if (categoryid) {
      const db = getFirestore()
      const queryCollection = collection(db, 'items')
      const qf = query(
        queryCollection,
        where('category', '==', categoryid)
      )
      getDocs(qf)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      const db = getFirestore()
      const queryCollection = collection(db, 'items')
      getDocs(queryCollection)
      .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() })) ))
      .catch( err => console.log(err) )
      .finally(() => setLoading(false))
    }
  }, [categoryid])

  return (
    <div className='itemList__container text-center p-5'>
        {loading ?
          <h1>
            <Spinner animation="grow" size="md" variant="success" />{' '}
            <Spinner animation="grow" size="md" variant="light" />{' '}
            <Spinner animation="grow" size="md" variant="dark" />
          </h1>
          :
          <ItemList products={products}/>
        }
    </div>
  )
}

export default ItemListContainer