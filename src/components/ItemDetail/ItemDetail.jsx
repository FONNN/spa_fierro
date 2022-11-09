
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

    //cambio de imagenes desde las miniaturas
    const changeImage = element => {
        let mpi = document.getElementById('main_product_image');
        mpi.src = element.target.src;
    }

    console.log(product);

    return (

        <div className="container pt-5 mt-5 mb-5">
            <h2>{product.category}</h2>
            <div className="card itmDtail__card">
                <div className="row m-3">
                    <div className="col-md-6 border-end">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="main_image">
                                <img src={product.image} className='card-img-top' id="main_product_image" width="475" />
                            </div>
                            <div className="thumbnail_images">
                                <ul id="thumbnail">
                                    <li><img onClick={changeImage} src={product.image} className='img-thumbnail' width="70" alt='thumnail 1' /></li>
                                    <li><img onClick={changeImage} src={product.image1} className='img-thumbnail' width="70" alt='thumnail 2' /></li>
                                    <li><img onClick={changeImage} src={product.image2} className='img-thumbnail' width="70" alt='thumnail 3' /></li>
                                    <li><img onClick={changeImage} src={product.image3} className='img-thumbnail' width="70" alt='thumnail 4' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 m-auto">
                        <div className="p-3 right-side">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className='m-auto'>{product.name}</h3>
                            </div>
                            <div className="mt-2 pr-3 content">
                                <p className='card-text'>{product.description}</p>
                                <p className='card-text'>{product.place_state}</p>
                            </div>
                            {/* <h3>{product.price}</h3>
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail


