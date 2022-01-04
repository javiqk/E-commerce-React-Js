import React from "react";
import { createContext, useState } from "react";


const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQty, setTotalQty] = useState([])

    const isInCart = (id) => {
        const found = products.find(product => product.id === id);
        return found;
        }
        
        const addProducts = (product, quantity) => {
        isInCart(product.id)
            ?
            setProducts(products.map((prod) => {
            if(prod.id === product.id) {
            setTotalQty (prod.quantity + totalQty)
        }
        return prod
        }))
            :
        setProducts([...products, product])
        setTotalPrice (totalPrice + product.price * product.quantity)
        }

        const removeProducts = (id) => {
            setProducts (products.filter(product => product.id !== id ))
        }

    const data = {
        products,
        addProducts,
        totalPrice,
        totalQty,
        removeProducts,
    }
    
    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
