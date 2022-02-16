import './ItemDetail.css';
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CartContext from "../../Components/CartContext/CartContext";


export default function ItemDetail({ data }) {

    const { addProducts , products} = useContext(CartContext)
    console.log("data item: ", data)
    const [itemCart, setItemCart] = useState(
        {
            name: data.name,
            id: data.id,
            price: data.price,
            image: data.img,
            quantity: 1,
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

    const sendItem = () => {
        addProducts(itemCart)
    }


    
    return (
        <>
            <Container className="product-item-container">
                <ThemeProvider theme={theme}>
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={8} >
                                <img className="container-img-detalle" src={`../assets/${data.img}`} />
                            </Grid>
                            <Grid item xs={4} >
                                <h2>{data.name}</h2>
                                <p>$ {data.price}</p> 
                                <Button variant="contained" color="background" onClick={sendItem}>
                                    Agregar al carrito
                                </Button>
                                <Link to="/">
                                <Button variant="contained" color="background" id='button-productos'>
                                    Ver mas productos
                                </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </ThemeProvider>
            </Container>
        </>
    )

}