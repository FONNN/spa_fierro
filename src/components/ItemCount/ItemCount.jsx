// import { ClassNames } from '@emotion/react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ initial, stock}) => {
    const [count, setCount] = useState(initial)

    // suma y resta
    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const handleSubtract = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const handleAddCart = () => {
        if (count < stock) {
            onAdd(count)
        }
    }
    //fin suma y resta


    return (
        <div>
            <Button onClick={handleSubtract} variant="outline-info"> - </Button>
            {' '}
            <label>{count}</label>
            {' '}
            <Button onClick={handleAdd} variant="outline-info"> + </Button>
            {' '}
            <Button onClick={handleAddCart} variant="outline-secondary"> Agregar al Carrito </Button>
        </div>
    )
}

export default ItemCount