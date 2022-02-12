import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";
import "./ProductsFiltered.css";
import { collection, getDocs } from 'firebase/firestore';
import db from "../../firebase";


const FilteredItems = ({title}) => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const { category } = useParams()

    async function getProducts(db) {
        const productosCol = collection(db, 'productos');
        const productosSnapshot = await getDocs(productosCol);
        const productosList = productosSnapshot.docs.map(doc => {
            let producto = doc.data()
            producto.id = doc.id
            return producto
        });
        return productosList;
    }

    
    
    useState(() => {
        getProducts(db).then((resultsProducts) => {
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
    }, [])


    return (
        <>
            <h2 className='tituloCategoria'>{category ? category : title}</h2>
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