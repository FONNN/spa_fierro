import { createContext, useContext, useState } from "react"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

//componente -> estados para producir renders y que se actualice en tiempo real

const CartContextProvider = ({ children }) => {
    //estados y funciones globales
    const [cartList, setCartList] = useState([])

    const addToCart = (prod) => {

        const index = cartList.findIndex(product => product.id === prod.id) //<- en product almaceno el index del elemento en el array
        if (index !== -1) {
            let cant = cartList[index].quantity
            cartList[index].quantity = cant + prod.quantity
            setCartList( [...cartList] )
        } else {
            setCartList([
                ...cartList,
                prod
            ])
        }

    }

    //vaciar carro
    const emptyCart = () => {
        setCartList([])
    }

    //total precio
    const totalPrice = () => {
        return cartList.reduce((acumPrice, prodObj) => acumPrice = acumPrice + (prodObj.price * prodObj.quantity), 0)
    }

    const totalQuantity = () => {
        return cartList.reduce((counter, productObject) => counter += productObject.quantity, 0)
    }

    //eliminar producto del carrito
    const deleteProduct = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            totalPrice,
            totalQuantity,
            deleteProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider