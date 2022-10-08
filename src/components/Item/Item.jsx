import { memo } from 'react'
import { Link } from 'react-router-dom'
import './Item.css'


const Item = memo(
  ({ products }) => {
    return (

      <div className="col">
        <div className="card h-100">
          <img src={products.image} className="card-img-top img-fluid" alt="imagen de tarjeta" />
          <div className="card-body">
            <h5 className="card-title">{products.name}</h5>
            <p className="card-text">{products.price}</p>
            <Link to={`/detail/${products.id}`}>
              <button className="btn btn-primary btn-sm">ver detalles</button>
            </Link>
          </div>
        </div>
      </div>

      // <div className='col-md-3 m-3'>
      //   <Card style={{ maxWidth: '20rem' }}>
      //     <Card.Img className='w-50' variant="top" src={products.image} />
      //     <Card.Body>
      //       <Card.Title>
      //         {`${products.name} - ${products.category}`}
      //       </Card.Title>
      //       <Card.Text>
      //         {`Precio: ${products.price}`}
      //       </Card.Text>
      //       <Link to={`/detail/${products.id}`}>
      //         <Button variant="outline-dark">Ver detalle</Button>
      //       </Link>
      //     </Card.Body>
      //   </Card>
      // </div>

      // <div className="card h-100 shadow-sm">
      //   <img
      //     src={products.image}
      //     className="card-img-top" alt={products.name}
      //   />
      //   <div className="card-body">
      //     <div className="clearfix mb-3">
      //       <span className="float-start badge rounded-pill bg-info">{products.name}</span>
      //       <span className="float-end price-hp">{products.price}</span>
      //     </div>
      //     <h5 className="card-title">
      //       {products.description}
      //     </h5>
      //     <div className="text-center my-4">
      //       <Link to={`/detail/${products.id}`}>
      //         <button type="button" className="btn btn-secondary">Ver detalle</button>
      //       </Link>
      //     </div>
      //   </div>
      // </div>

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

