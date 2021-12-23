import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";

    export default function ContainerItemDetail() {
        const [product, setProduct] = useState([])
        const [loader, setLoader] = useState(true)
        const { id } = useParams()

        const dataProducts = [{
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