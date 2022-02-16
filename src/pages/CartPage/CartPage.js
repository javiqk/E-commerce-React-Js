import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import CartContext from '../../Components/CartContext/CartContext';
import ContactModal from '../../Components/ContactModal/ContactModal';
import "./CartPage.css";

export default function CartPage() {

    const { products, totalPrice, addProducts, onRemove, clearCart } = useContext(CartContext)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <div>
            {products.length === 0 ? (
            <>
                <h4>No hay productos agregados</h4>
                <Link to="/">
                    <Button variant="contained" color="background">Ver productos</Button>
                </Link>
            </>
            ) : (
        
        <>
            <Container className='container-cart-page'>
                <Grid container xs={8}>
                    <Grid container spacing={2} className="header-cart">
                        <Grid item xs={8} >
                            <h3>Producto</h3>
                        </Grid>
                        <Grid item xs={2} >
                            <h3>Cantidad</h3>
                        </Grid>
                        <Grid item xs={2} >
                            <h3 className="product-price">Precio</h3>
                        </Grid>
                    </Grid>
                    {products.map((product) => {
                        return(
                            <Grid key={product.id} container spacing={1} className="body-cart item-cart-page">
                                <Grid item xs={2} >
                                    <img src={`../assets/${product.image}`} alt="img" />
                                </Grid>
                                <Grid item xs={6}>
                                    <p className='product-name'>{product.name}</p>
                                </Grid>
                                <Grid item xs={2} >
                                    <p className='product-quantity'>{product.quantity}</p>
                                    <div className='contenedor-button'>
                                    <Button id='button-resta' onClick={() => onRemove (product)}>-</Button>
                                    <Button id='button-suma' onClick={() => addProducts (product)}>+</Button>
                                    </div>
                                </Grid>
                                <Grid item xs={2} >
                                    <p className='product-quantity'>$ {product.price}</p>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid container xs={4} className='grid-total-price'>
                    <div>
                        <p>SUBTOTAL</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div>
                        <p>TOTAL</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button id='button--clear--cart' variant="outlined" onClick={clearCart} href="/">VACIAR CARRITO</Button>
                    <Button className='button--finalizar' variant="outlined" onClick={handleClickOpen}>COMPLETAR COMPRA</Button>
                </Grid>
            </Container>
            <ContactModal 
                open={open} 
                handleClose={handleClose} 
                products={products} 
                total={totalPrice}
            />
        </>
    )
    }
</div>

)
}
