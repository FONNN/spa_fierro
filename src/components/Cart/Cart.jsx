import { Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext/CartContext'

const Cart = () => {

    const { cartList, emptyCart, deleteProduct, totalQuantity, totalPrice } = useCartContext()
    console.log(cartList);

    return (
        <div>
            <h1>Carrito</h1>
            <ul>
                {cartList.map(item => (
                    <li key={item.id}>
                        <div className='w-25'>
                            <img src={item.image} alt='foto del producto' className='w-25' />
                            Nombre: {item.name} - Cantidad: {item.amount} - Precio: {item.price} - Subtotal: {item.amount * item.price}
                        </div>
                    </li>
                ))}
            </ul>
            <Button onClick={emptyCart}>Vaciar Carrito</Button>
        </div>
    )
}

export default Cart