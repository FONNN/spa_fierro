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

      // <div className="card" style={{width: '400px'}}>
      //   <img className="card-img-top" src={products.image} alt="Card image" style={{width: '100%'}} />
      //   <div className="card-body">
      //     <h4 className="card-title">{products.name}</h4>
      //     <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      //     <Link to={`/detail/${products.id}`}>
      //       <a href="#" className="btn btn-info">Ver detalle</a>
      //     </Link>
      //   </div>
      // </div>
    )
  }
)

export default Item

