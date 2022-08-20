import { memo } from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Item = memo(
  ({ products }) => {
    return (
      <div className='col-md-3 m-3'>
        <Card style={{ maxWidth: '20rem' }}>
          <Card.Img className='w-50' variant="top" src={products.image} />
          <Card.Body>
            <Card.Title>
              {`${products.name} - ${products.category}`}
            </Card.Title>
            <Card.Text>
              {`Precio: ${products.price}`}
            </Card.Text>
            <Link to={`/detail/${products.id}`}>
              <Button variant="info">Ver detalle</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
)

export default Item

