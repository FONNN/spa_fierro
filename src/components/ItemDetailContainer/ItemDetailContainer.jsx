import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    // hook useParams
    const {detailid} = useParams()
    console.log(detailid);


    return (
        <div>
            <h1>ItemDetailContainer</h1>
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer