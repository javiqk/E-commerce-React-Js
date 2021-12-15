import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from '@mui/material/styles';

export default function ItemDetail ({ data }) {
    const theme = createTheme ({
        palette: {
            base: {
                main: "#070802"
            },
            background: {
                main: "#e9ff41"
            },
        },
    });

return (
        <>
            <Container className="product-item-container">
                <ThemeProvider theme={theme}>
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