import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import Item from '../Item/Item'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ListItems = () => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const dataProducts = [
        {
            id: 1,
            name: 'Remera Abeja',
            price: 1400,
            stock: 10,
            img: 'remeraAbeja.jpg'
        },
        {
            id: 2,
            name: 'Remera Bugs',
            price: 1500,
            stock: 20,
            img: 'remeraBugs.jpg'
        },
        {
            id: 3,
            name: 'Remera Cactus',
            price: 1700,
            stock: 10,
            img: 'remeraCactus.jpg'
        },
        {
            id: 4,
            name: 'Remera Cupcake',
            price: 1200,
            stock: 25,
            img: 'remeraCupcake.jpg'
        }
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000)
    })

    useEffect(() => {
        getProducts.then((data) => {
            console.log("respuesta de promesa:", data)
            setProducts(data)
            setLoader(false)
        })
    }, [])

    return (
        <>
            <h2>Productos Destacados</h2>
            <Container className="product-container">
                {
                    loader
                        ?
                        <CircularProgress />
                        :
                        <Grid container spacing={2}>
                            {products.map(product => {
                                return (
                                    <Grid item xs={3} key={product.id}>
                                        <Item data={product} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                }

            </Container>
        </>
    )
}


export default ListItems