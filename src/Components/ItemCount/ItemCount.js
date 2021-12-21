import React, {useState , useEffect } from "react";
import Button from '@mui/material/Button';

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
       <h4>Cantidad</h4>
       <h8>{itemCount}</h8>
       <Button onClick={updateItem}>+</Button>
       <Button onClick={removeItem}>-</Button>
       <Button>Agregar al carrito</Button>
       <span>stock: {stock}</span>
    </div>
)
}