import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import Item from '../Item/Item'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';


const ListItems = () => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const dataProducts = [
        {
            id: 1,
            name: 'Remera Abeja',
            price: 1400,
            stock: 10,
            img: 'remeraAbeja.jpg',
            category: "remera",
        },
        {
            id: 2,
            name: 'Remera Bugs',
            price: 1500,
            stock: 20,
            img: 'remeraBugs.jpg',
            category: "remera",
        },
        {
            id: 3,
            name: 'Remera Cactus',
            price: 1700,
            stock: 10,
            img: 'remeraCactus.jpg',
            category: "remera",
        },
        {
            id: 4,
            name: 'Remera Cupcake',
            price: 1200,
            stock: 25,
            img: 'remeraCupcake.jpg',
            category: "remera",
        },
        {
            id: 5,
            name: 'Remera Bart',
            price: 1700,
            stock: 13,
            img: 'remeraBart.jpg',
            category: "remera",
        },
        {
            id: 6,
            name: 'Buzo Espacial',
            price: 3700,
            stock: 12,
            img: 'buzoEspacial.jpg',
            category: "buzo",
        },
        {
            id: 7,
            name: 'Buzo Papas',
            price: 3700,
            stock: 17,
            img: 'buzoPapas.jpg',
            category: "buzo",
        },
        {
            id: 8,
            name: 'Buzo Simpson',
            price: 3700,
            stock: 19,
            img: 'buzoSimpson.jpg',
            category: "buzo",
        },
        {
            id: 9,
            name: 'Aritos',
            price: 3700,
            stock: 12,
            img: 'aritos.jpg',
            category: "aritos",
        },
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000)
    })

    useEffect(() => {
        getProducts.then((data) => {
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