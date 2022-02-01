import React, {useState} from 'react'
import Button from '@mui/material/Button';
import "../ItemCount/ItemCount.css";

export default function ItemCount({stock, onAdd}) {
    const [itemCount, setItemCount] = useState(0)

    const updateItem = () => {     
        if(itemCount < stock) {
            setItemCount(itemCount + 1)
            onAdd(itemCount + 1)
        }
    }

    const removeItem = () => {
        itemCount > 0 && setItemCount(itemCount - 1)
    }

    return(
        <div className="item-count__buttons">
            <Button variant="outlined" color="base" onClick={removeItem}>-</Button>
            <p id='itemCount'>{itemCount}</p>
            <Button variant="outlined" color="base" onClick={updateItem} >+</Button>
        </div>
    )
}