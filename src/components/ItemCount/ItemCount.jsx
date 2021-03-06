// import { ClassNames } from '@emotion/react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    // suma y resta
    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const handleSubtract = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    onAdd = (cant) => {
        console.log(`La cantidad es ${cant}`);
    }

    const handleAddCart = () => {
        onAdd(count)
    }


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