import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";



const FilteredItems = ({title}) => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const { category } = useParams()
    const dataProducts = [
        {
            id: 1,
            name: 'Remera Abeja',
            price: 1400,
            stock: 10,
            img: 'remeraAbeja.jpg',
            category: "remeras",
        },
        {
            id: 2,
            name: 'Remera Bugs',
            price: 1500,
            stock: 20,
            img: 'remeraBugs.jpg',
            category: "remeras",
        },
        {
            id: 3,
            name: 'Remera Cactus',
            price: 1700,
            stock: 10,
            img: 'remeraCactus.jpg',
            category: "remeras",
        },
        {
            id: 4,
            name: 'Remera Cupcake',
            price: 1200,
            stock: 25,
            img: 'remeraCupcake.jpg',
            category: "remeras",
        },
        {
            id: 5,
            name: 'Remera Bart',
            price: 1700,
            stock: 13,
            img: 'remeraBart.jpg',
            category: "remeras",
        },
        {
            id: 6,
            name: 'Buzo Espacial',
            price: 3700,
            stock: 12,
            img: 'buzoEspacial.jpg',
            category: "buzos",
        },
        {
            id: 7,
            name: 'Buzo Papas',
            price: 3700,
            stock: 17,
            img: 'buzoPapas.jpg',
            category: "buzos",
        },
        {
            id: 8,
            name: 'Buzo Simpson',
            price: 3700,
            stock: 19,
            img: 'buzoSimpson.jpg',
            category: "buzos",
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
        getProducts.then((resultsProducts) => {
            if(category) {
                resultsProducts.filter(resultProduct => {
                    if (resultProduct.category === category) {
                        setProducts(products => [...products, resultProduct])
                        setLoader(false)
                    }
                })
            }
            else{
                setProducts(resultsProducts)
                setLoader(false)
            }
        })
    }, [category])

    return (
        <>
            <h2>{category ? category : title}</h2>
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


export default FilteredItems