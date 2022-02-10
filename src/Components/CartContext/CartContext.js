import React from "react";
import { createContext, useState } from "react";


    const CartContext = createContext();

    const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProducts = (product) => {
    const ProductExist = products.find ((item) => item.id === product.id);
        if (ProductExist) {
            setProducts (
                products.map((item)=> item.id === product.id 
                ? {...ProductExist, quantity: ProductExist.quantity + product.quantity}
                : item )
            );
        } else {
            setProducts ([...products, {...product, quantity : product.quantity }]);
        }
    };

        const onRemove = (product) => {
            const ProductExist = products.find ((item) => item.id === product.id);
            if (ProductExist.quantity === 1) {
                setProducts (products.filter((item) => item.id !== product.id));
            } else {
                setProducts (
                products.map ((item) =>
                item.id === product. id 
                ? {...ProductExist, quantity: ProductExist.quantity -1 } : item
            )
            );
            }
            };
        
            const clearCart = () => {
                setProducts ([]) ;
            }
              
        

    const data = {
        products,
        addProducts,
        totalPrice,
        onRemove,
        clearCart,
    }
    
    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
