import React, {useState , useEffect } from "react";
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";

export default function Product ({stock, onAdd}) {
    const [itemCount, setItemCount] = useState (0)

    const updateItem = () => {
        itemCount < stock && setItemCount(itemCount + 1)
}
    const removeItem = () => {
        itemCount > 0 && setItemCount (itemCount - 1)
}

return (
    <div>
        <span>Cantidad: </span>
        <h8>{itemCount} </h8>
        <span> stock: {stock} </span>
        <Button variant="contained" color="success" onClick={updateItem} >+</Button>
        <Button variant="contained" color="error" onClick={removeItem}>-</Button> 
        <Button>Agregar al carrito</Button>
    </div>
)
}