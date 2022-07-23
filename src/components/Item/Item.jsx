import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Item = ({ products }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={products.image} />
      <Card.Body>
        <Card.Title>
          {`${products.name} - ${products.category}`}
        </Card.Title>
        <Card.Text>
          {`stock disponible: ${products.stock}`}
        </Card.Text>
        <Button variant="info">Ver detalle del producto</Button>
      </Card.Body>
    </Card>
  )
}

export default Item