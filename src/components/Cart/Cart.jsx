import { Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext/CartContext'
import './Cart.css'

const Cart = () => {

    const { cartList, emptyCart, deleteProduct, totalQuantity, totalPrice } = useCartContext()
    console.log(cartList);

    return (
        // <div>
        //     <h1>Carrito</h1>
        //     <ul>
                // {cartList.map(item => (
                //     <li key={item.id}>
                //         <div className='w-25'>
                //             <img src={item.image} alt='foto del producto' className='w-25' />
                //             Nombre: {item.name} - Cantidad: {item.amount} - Precio: {item.price} - Subtotal: {item.amount * item.price}
                //         </div>
                //     </li>
                // ))}
        //     </ul>
        //     <Button onClick={emptyCart}>Vaciar Carrito</Button>
        // </div>

        <div className="h-100 h-custom" style={{backgroundColor: '#d2c9ff'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card card-registration card-registration-2" style={{borderRadius: '15px'}}>
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        {/* item de lista */}
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                <h6 className="mb-0 text-muted">3 items</h6>
                                            </div>
                                            <hr className="my-4" />
                                            {cartList.map(item => (
                                                <div className="row mb-4 d-flex justify-content-between align-items-center" key={item.id}>
                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                        <img src={item.image}
                                                            className="img-fluid rounded-3" alt="imagen" />
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                        <h6 className="text-muted">{item.name}</h6>
                                                        <h6 className="text-black mb-0">{item.price}</h6>
                                                    </div>
                                                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h6 className="text-muted">Unidades:</h6>
                                                        <h6 className="text-black mb-0">{item.amount}</h6>
                                                    </div>
                                                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h6 className="text-muted">Subtotal:</h6>
                                                        <h6 class="mb-0">$ {item.amount * item.price}</h6>
                                                    </div>
                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                                                    </div>
                                                    <hr className="my-4" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                            <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">items 3</h5>
                                                    <h5>€ 132.00</h5>
                                                </div>

                                                <h5 className="text-uppercase mb-3">Shipping</h5>

                                                <div className="mb-4 pb-2">
                                                    <select className="select">
                                                        <option value="1">Standard-Delivery- €5.00</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                        <option value="4">Four</option>
                                                    </select>
                                                </div>

                                                <hr className="my-4" />

                                                    <div className="d-flex justify-content-between mb-5">
                                                        <h5 className="text-uppercase">Total price</h5>
                                                        <h5>€ 137.00</h5>
                                                    </div>

                                                    <Button onClick={emptyCart}>Vaciar Carrito</Button>

                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cart