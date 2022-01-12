import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from '../../firebase'

export default function ContainerItemDetail() {
    const [product, setProduct] = useState([])
    const [loader, setLoader] = useState(true)
    const { id } = useParams()

    async function getProduct(db) {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let producto = docSnap.data();
            producto.id = docSnap.id
            setProduct(producto)
            setLoader(false)
        } else {
            console.log("No existe el documento");
        }
    }

    useEffect(() => {
        getProduct(db)
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