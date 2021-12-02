import React, {useState , useEffect } from "react";

export default function Product ({stock}) {
    const [itemCount, setItemCount] = useState (0)

    const updateItem = () => {
        itemCount < stock && setItemCount(itemCount + 1)
}
    const removeItem = () => {
        itemCount > 0 && setItemCount (itemCount - 1)
}

return (
    <div>
       <h1>Producto</h1>
       <h1>{itemCount}</h1>
       <button onClick={updateItem}>+</button>
       <button onClick={removeItem}>-</button>
       <button>Agregar al carrito</button>
       <span>stock: {stock}</span>
    </div>
)
}