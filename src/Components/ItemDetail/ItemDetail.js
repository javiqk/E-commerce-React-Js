import './ItemDetail.css'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom';


export default function ItemDetail({ data }) {
    const [quantityItem, setQuantityItem] = useState(0)
    const [itemCart, setItemCart] = useState(
        {
            name: data.name,
            id: data.id,
            quantity: 0
        }
    )
    const theme = createTheme({
        palette: {
            base: {
                main: '#070802',
            },
            background: {
                main: '#e9ff41',
            },
        },
    });


    const onAdd = (value, name) => {
        console.log("items agregados: ", value)
        itemCart.quantity = value
        console.log(name)
    }

    const sendItem = () => {
        console.log("itemCart: ", itemCart)
    }

    return (
        <>
            <Container className="product-item-container">
                <ThemeProvider theme={theme}>
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={8} className="container-img-detalle">
                                <img src={`../assets/${data.img}`} />
                            </Grid>
                            <Grid item xs={4} >
                                <h2>{data.name} </h2>
                                <p>$ {data.price}</p>
                                <ItemCount stock={data.stock} onAdd={onAdd}/>
                                <Button variant="contained" color="background" onClick={sendItem}>
                                    <Link to="/cart">Comprar</Link>
                                </Button>
                            </Grid>
                        </Grid>

                    </div>
                </ThemeProvider>
            </Container>
        </>
    )

}