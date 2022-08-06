import { createContext, useContext, useState } from "react"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

//componente -> estados para producir renders y que se actualice en tiempo real

const CartContextProvider = ({ children }) => {
    //estados y funciones globales
    const [cartList, setCartList] = useState([])

    const addToCart = (prod) => {
        setCartList([
            ...cartList,
            prod
        ])
    }

    const emptyCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider