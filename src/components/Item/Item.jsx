import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const Item = ({ products }) => {
  return (
    <div className='col-md-3 m-3'>
    <Card style={{ maxWidth: '18rem' }}>
      <Card.Img variant="top" src={products.image} />
      <Card.Body>
        <Card.Title>
          {`${products.name} - ${products.category}`}
        </Card.Title>
        <Card.Text>
          {`stock disponible: ${products.stock}`}
        </Card.Text>
        <Link to={`/detail/${products.id}`}>
          <Button variant="info">Ver detalle del producto</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item

