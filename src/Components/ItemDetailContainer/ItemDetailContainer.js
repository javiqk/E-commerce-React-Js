import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom"

    export default function ContainerItemDetail() {
        const [product, setProduct] = useState([])
        const [loader, setLoader] = useState(true)
        const { id } = useParams()

    const dataProducts = [{
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

        const getProduct = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(dataProducts)
            }, 2000)
        })


    useEffect(() => {
        getProduct.then(resultsProducts => {
            resultsProducts.filter(resultProduct => {
                if (resultProduct.id === parseInt(id)) {
                    setProduct(resultProduct)
                    setLoader(false)
                }
            })
        })
    }, [id])

    return (
        <div>
            {loader ?
                <CircularProgress />
                    :
                <ItemDetail data={product} />
            }
        </div>
    )

}