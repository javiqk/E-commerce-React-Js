import React from "react";
import { createContext, useState } from "react";


const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const isInCart = (id) => {
        const found = products.find(product => product.id === id);
        return found;
        }
        
        const addProducts = (product, quantity) => {
        isInCart(product.id)
            ?
            setProducts(products.map((prod) => {
            if(prod.id === product.id) {
            prod.quantity += quantity
        }
        return prod
        }))
            :
        setProducts([...products, product])
        }

    const data = {
        products,
        addProducts
    }
    
    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
