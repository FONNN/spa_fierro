import { useEffect } from 'react';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { task } from '../../helpers/task';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    task() //mock consulta api
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  console.log(products);

  return (
    <div>
      {greeting}
      <ul>
        {loading ?
          <h1>
            <Spinner animation="grow" size="sm" variant="info" />{' '}
            <Spinner animation="grow" size="sm" variant="secondary" />{' '}
            <Spinner animation="grow" size="sm" variant="dark" />
          </h1>
          :
          products.map(product =>
            <Card key={product.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>
                  {`${product.name} - ${product.category}`}
                </Card.Title>
                <Card.Text>
                  {`stock disponible: ${product.stock}`}
                </Card.Text>
                <Button variant="info">Ver detalle del producto</Button>
              </Card.Body>
            </Card>
          )
        }
      </ul>
      <ItemCount initial={1} stock={15} onAdd />
    </div>
  )
}

export default ItemListContainer