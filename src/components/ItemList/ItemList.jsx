import React, { memo } from 'react'
import Item from '../Item/Item';

// import { CardGroup } from 'react-bootstrap';

const ItemList = memo(
    ({ products }) => {
        // console.log(products)
        return (

            <div className="item__container m-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                    {
                        products?.map(product => <Item key={product.id} products={product} />)
                    }

                </div>
            </div>
        )
    }
)

export default ItemList