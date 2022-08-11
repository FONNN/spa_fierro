import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { task } from "../../helpers/task"
import '/src/components/ItemDetailContainer/ItemDetailContainer.css'
import { useEffect, useState } from 'react'



const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    // hook useParams
    const {detailid} = useParams()

    //task(detailid)
    useEffect( () => {
        task(detailid)
        .then(resp => setProduct(resp))
    }, [detailid])

    return (
        <div className="itemDetailContainer">
            <h1>ItemDetailContainer</h1>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer