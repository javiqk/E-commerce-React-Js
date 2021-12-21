import React from "react";
import './Item.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
        base: {
            main: '#070801',
        },
        background: {
            main: '#e9ff30',
        },
    },
});
export default function Item({ data }) {
    const onAdd = (value) => {
        console.log("items agregados: ", value)
    }


    return (
        <div className="card-item-product">
            <ThemeProvider theme={theme}>
                <span className="stock-text">Stock : {data.stock}</span>
                <div className="item-image">
                    <img src={`../../../assets/${data.img}`} alt="product image" />
                </div>
                <div className="item-info">
                    <h2>{data.name}</h2>
                    <Link className='link-Button__color' to={`/products/${data.id}`}><Button variant="contained" color="background">Ver detalle</Button></Link>
                </div>
            </ThemeProvider>
        </div>

    )
}

