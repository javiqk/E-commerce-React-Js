import React, {useState, useEffect, useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../CartWidget/CartWidget.css"
import CartContext from "../../Components/CartContext/CartContext"
import ModalCart from "../../Components/ModalCart/ModalCart"

const CartWidget = () => {
    const [showCart, setShowCart ] = useState(false)
    useEffect(() => {
    })
    const {products,totalPrice, totalQty} = useContext(CartContext)

    const openCart = () => {
        setShowCart(!showCart)
    }

    return(
        <div className="cart-container">
            <ShoppingCartIcon style={{fill: "white"}} onClick={openCart}/>
            {showCart && <ModalCart products={products} total={totalPrice} qty={totalQty}/>}
        </div>
    )
}

export default CartWidget