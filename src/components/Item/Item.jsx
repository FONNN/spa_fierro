import { memo } from 'react'
import { Link } from 'react-router-dom'
import './Item.css'


const Item = memo(
  ({ products }) => {
    return (

      <div className="col d-flex align-items-stretch">
        <div className="card h-100">
          <img src={products.image} className="card-img-top" alt="imagen de tarjeta" />
          <div className="card-body">
            <h5 className="card-title">{products.name}</h5>
            <p className="card-text p_item">{products.price}</p>
            <Link to={`/detail/${products.id}`}>
              <button className="btn btn-success">ver detalles</button>
            </Link>
          </div>
        </div>
      </div>

    )
  }
)

export default Item

