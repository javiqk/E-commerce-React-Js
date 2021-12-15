import React, { useEffect, useState } from "react"
import ItemDetail from "../../ItemDetail/ItemDetail"

export default function ItemDetailContainer () {
    const [product, setProduct] = useState ([])

    const dataProduct =
        {
            id: 1,
            name: 'Remera Abeja',
            price: 1400,
            stock: 10,
            img: 'remeraAbeja.jpg'
        },

        const getProduct = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(dataProduct)
            }, 2000)
        })

    useEffect (() => {
        getProduct.then (data => {
            console.log ("respuesta de promesa", data) 
            setProduct (data)
        })
    },[])

    return (
        <div>
            ContainerItemDetail
            <ItemDetail />
        </div>
    )
}