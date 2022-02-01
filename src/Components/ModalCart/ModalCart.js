import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './ModalCart.css';


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


export default function ModalCart ({products, total, totalQty, onRemove}) {

    return(
        <div className="box-cart">
            {products.length === 0 ? (
            <>
            <ThemeProvider theme={theme}>
                <h4>No hay productos agregados</h4>
                <Link to="/">
                    <Button variant="contained" color="background">Ver productos</Button>
                </Link>
            </ThemeProvider>
            </>
            ) : (
        <> {products.map ((product) => {
            return (
                <div className='item-cart-list' key={product.id}>
                    <div className='item-cart-img'>
                        <img  src={`../assets/${product.image}`} />
                    </div>
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <span>Cant: {product.quantity}</span>
                </div>
            )
        })}
        <ThemeProvider theme={theme}>
                <div className='container-finished'>
                        <p>TOTAL:</p>
                        <span>$ {total}</span>
                        <Button variant="outlined" color="base" onClick= {onRemove}> Borrar producto</Button>
                        <Link to="/cart">
                        <Button variant="contained" color="background">Finalizar compra</Button>
                        </Link>
                </div>
                </ThemeProvider>
        </>
            )}
</div>


)
}