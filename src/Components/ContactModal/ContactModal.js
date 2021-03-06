import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../ContactModal/ContactModal.css";
import db from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import CartContext from '../CartContext/CartContext';

export default function ContactModal({open, handleClose, products, total}) {
    const {clearCart } = useContext(CartContext)
    const [formData, setFormData] = useState({
        nombre : '',
        telefono : '',
        mail: ''
    })
    const [orderId, setOrderId] = useState(null)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name] : value})
    }

    const sendOrder = () => {
        let order = {}
        order.buyer = formData
        order.items = products
        order.total = total
        
        pushOrder(order)
    }

    const pushOrder = async(order) => {
        const orderFirebase = collection(db, 'ordenes')
        const orden = await addDoc(orderFirebase, order)
        setOrderId(orden.id)
    }

  return (
    <div>
        
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open} 
            className="modal-contact-data"
        >
        
            {orderId != null ? 
            <>
                <h2>La orden se generó con éxito, código de orden: {orderId}</h2>
                <div className='container-button-order'>
                <Link to="/">
                  <Button id="button-order" onClick={clearCart}>ir a Home</Button>  
                </Link>         
                </div>
            </>

            :
                <>
                    <DialogTitle>Completa tus datos</DialogTitle>
                        <DialogContent>
                            <Box component="form" noValidate autoComplete="off" className="form-container">
                                <TextField label="Nombre" name="nombre" variant="outlined" value={formData.nombre} onChange={handleChange}/>
                                <TextField label="Telefono" name="telefono" variant="outlined" value={formData.telefono} onChange={handleChange}/>
                                <TextField label="Mail" name="mail" variant="outlined" value={formData.mail} onChange={handleChange}/>
                                <Button variant="outlined" onClick={sendOrder}>Finalizar Compra</Button>
                            </Box>
                    </DialogContent>
                </>
            }
            
        </Dialog>
    </div>
  );
}