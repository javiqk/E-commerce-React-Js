import React from "react"
import { ThemeProvider } from "react-bootstrap"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function ItemDetail ({ data }) {
    console.log (data)
return (
        <>
            <Container className="product-item-container">
                <ThemeProvider>
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={8} >
                            <img src={`../../../assets/${data.img}`} alt="product image" />
                            </Grid> 
                        <Grid item xs={4} >
                            <h2>{data.name}</h2>
                            <p>{data.price}</p>
                            <Button variant="contained" color="background">Comprar</Button>
                        </Grid>
                        </Grid>
                </div>
                </ThemeProvider>
            </Container>
        </>
    )
}