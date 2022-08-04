
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '/src/components/ItemDetail/ItemDetail.css'

const ItemDetail = ({ product }) => {

    const [ isCount, setIsCount ] = useState(true)

    const onAdd = (cant) => {
        console.log(`La cantidad es ${cant}`)
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
                                    <img src="https://via.placeholder.com/115x100/87CEFA/000000" alt="" />
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
                                <span className="tagged_as"><strong>Stock:</strong> <a rel="tag">{product.stock}</a></span>
                            </div>
                            <div>
                                <ItemCount
                                    initial={1}
                                    stock={30}
                                    onAdd={onAdd}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>


    )
}

export default ItemDetail