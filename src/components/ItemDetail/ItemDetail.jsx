
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext/CartContext'
import '/src/components/ItemDetail/ItemDetail.css'
import { Link } from "react-router-dom"

const ItemDetail = ({ product }) => {

    const [isCount, setIsCount] = useState(true)
    const { addToCart } = useCartContext()

    const onAdd = (cant) => {
        alert(`La cantidad es ${cant}`)
        addToCart({ ...product, amount: cant })
        setIsCount(false)
    }

    return (

        <div className="container mt-5 mb-5">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-6 border-end">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="main_image">
                                <img src={product.image} id="main_product_image" width="350" />
                            </div>
                            <div className="thumbnail_images">
                                <ul id="thumbnail">
                                    <li><img onclick="changeImage(this)" src={product.image} width="70" /></li>
                                    <li><img onclick="changeImage(this)" src={product.image} width="70" /></li>
                                    <li><img onclick="changeImage(this)" src={product.image} width="70" /></li>
                                    <li><img onclick="changeImage(this)" src={product.image} width="70" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 right-side">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>{product.name}</h3>
                            </div>
                            <div className="mt-2 pr-3 content">
                                <p>{product.description}</p>
                            </div>
                            <h3>{product.price}</h3>
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
                </div>
            </div>
        </div>

    )
}

export default ItemDetail


