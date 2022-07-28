import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { task } from "../../helpers/task"

import { useEffect } from 'react'



const ItemDetailContainer = () => {

    // hook useParams
    const {detailid} = useParams()
    console.log(detailid);

    //task(detailid)
    useEffect( () => {
        task(detailid)
        .then(resp => console.log(resp))
    }, [])


    return (
        <div>
            <h1>ItemDetailContainer</h1>
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer