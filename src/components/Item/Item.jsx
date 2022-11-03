import { memo } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css'


const Item = memo(
  ({ products }) => {
    return (

      <div className="col d-flex align-items-stretch">
        {/* <div className="card h-100">
          <img src={products.image} className="card-img-top" alt="imagen de tarjeta" />
          <div className="card-body">
            <h5 className="card-title">{products.name}</h5>
            <p className="card-text p_item">{products.price}</p>
            <Link to={`/detail/${products.id}`}>
              <button className="btn btn-success">ver detalles</button>
            </Link>
          </div>
        </div> */}
        <div className='card box bg-light mb-3'>
          <img
            className='card-img-top crdItm__img'
            src={products.image}
            alt='foto tarjeta'
          />
          <h4 className='p-3 text-light'>{products.name}</h4>
          <blockquote className='text-black-50 p-1'>Disponibilidad: {products.place_state}</blockquote>
          <Link to={`/detail/${products.id}`}>
            <Button className='mb-3' variant='success'>Ver detalles</Button>
          </Link>
        </div>
      </div>

    )
  }
)

export default Item

