import React, { memo } from 'react'
import Divider from '../Divider/Divider';
import Item from '../Item/Item';

const ItemList = 
    ({ products }) => {

        const listTitle = products.find(objProd => objProd)

        return (

            <div className="item__container mt-5">
                <h2>Proyectos</h2>
                <Divider />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    {
                        products?.map(product => <Item key={product.id} products={product} />)
                    }

                </div>
            </div>
        )
    }



export default ItemList