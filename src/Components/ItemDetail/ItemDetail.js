import React from "react"

export default function ItemDetail ({ data }) {

    console.log (data)
    return (
        <>
            <div>
            Nombre: {data.name}
            Precio: {data.price}
            Stock: {data.stock}
            </div>
        </>
        )
    }