
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext/CartContext'
import '/src/components/ItemDetail/ItemDetail.css'
import { Link } from "react-router-dom"

const ItemDetail = ({ product }) => {

    const [ isCount, setIsCount ] = useState(true)
    const { addToCart } = useCartContext()

    const onAdd = (cant) => {
        alert(`La cantidad es ${cant}`)
        addToCart( { ...product, amount: cant } )
        setIsCount(false)
    }

    return (
        <div className="container bootdey">
            <div className="col-md-12">
                <section className="panel">
                    <div className="panel-body">
                        <div className="col-md-6">
                            <div className="pro-img-details">
                                <img src={product.image} alt="foto de producto" />
                            </div>
                            <div className="pro-img-list">
                                <a href="#">
                                    <img src={product.image} className="img-fluid img-thumbnail" alt="thumbnail 1" />
                                </a>
                                <a href="#">
                                    <img src="https://via.placeholder.com/115x100/FF7F50/000000" alt="" />
                                </a>
                                <a href="#">
                                    <img src="https://via.placeholder.com/115x100/20B2AA/000000" alt="" />
                                </a>
                                <a href="#">
                                    <img src="https://via.placeholder.com/120x100/20B2AA/000000" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="pro-d-title">
                                {product.name}
                            </h3>
                            <p>
                                {product.description}
                            </p>
                            <div className="product_meta">
                                <span className="posted_in"> <strong>Categoria:</strong> <a rel="tag">{product.category}</a>.</span>
                                <span className="tagged_as"><strong>Precio:</strong> <a rel="tag">{product.price}</a></span>
                            </div>
                            <div>
                            {
                                isCount ?
                                        <ItemCount initial={1} stock={30} onAdd={onAdd} />
                                    :
                                        <>
                                            <Link to={'/cart'}>
                                                <button className="btn btn-outline-success" >Terminar Compra</button>
                                            </Link>
                                            <Link to={'/'}>
                                                <button className="btn btn-outline-primary" >Seguir Comprando</button>
                                            </Link>
                                        </>
                            }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>


    )
}

export default ItemDetail