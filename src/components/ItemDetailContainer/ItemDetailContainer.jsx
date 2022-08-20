import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { task } from "../../helpers/task"
import '/src/components/ItemDetailContainer/ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore"



const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    // hook useParams
    const {detailid} = useParams()

    //task(detailid)
    // useEffect( () => {
    //     task(detailid)
    //     .then(resp => setProduct(resp))
    // }, [detailid])

    useEffect(() => {
        const db = getFirestore()
        const queryProduct = doc(db, 'items', detailid)
        getDoc(queryProduct)
        .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
    }, [])

    return (
        <div className="itemDetailContainer">
            <h1>ItemDetailContainer</h1>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer