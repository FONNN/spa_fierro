import React from 'react'
import Item from '../Item/Item';

import CardGroup from 'react-bootstrap/CardGroup';

// import { CardGroup } from 'react-bootstrap';

const ItemList = ({ productos }) => {

    return (
        <>
            <CardGroup>
                {
                    productos?.map(products => <Item key={products.id} products={products} />)
                }
            </CardGroup>
        </>
    )
}
// <div className="container text-center">

// <div className="row row-cols-1 row-cols-md-2 g-4">
//     <div className="col">
//         {
//             productos?.map(products => <Item key={products.id} products={products} />)
//         }
//     </div>
// </div>
// </div>

export default ItemList