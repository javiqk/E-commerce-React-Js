import React from "react";
import { createContext, useState } from "react";


    const CartContext = createContext();

    const CartProvider = ({children}) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("productos")) || [])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQty, setTotalQty] = useState([0])

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
        addProductStorage(product)
        setTotalPrice (totalPrice + product.price * product.quantity)
        }

        const addProductStorage = (product) => {
            localStorage.setItem("productos", JSON.stringify([...products, product]))
        }

        const onRemove = (product) => {
            const exist = products.find((x) => x.id === product.id);
            if (exist.qty === 1) {
              setProducts(products.filter((x) => x.id !== product.id));
            } else {
              setProducts(
                products.map((x) =>
                  x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
              );
            }
          };

    const data = {
        products,
        addProducts,
        totalPrice,
        totalQty,
        onRemove,
    }
    
    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
