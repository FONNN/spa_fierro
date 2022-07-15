// import { ClassNames } from '@emotion/react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ initial=1, stock=10, onAdd}) => {
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

    onAdd = () => {
        console.log(`La cantidad es ${count}`);
    }


    return (
        <div className='card w-25'>
            <label>{count}</label>
            <br />
            <Button onClick={handleSubtract} variant="outline-info"> - </Button>
            {' '}
            <Button onClick={handleAdd} variant="outline-info"> + </Button>
            <br />
            <Button onClick={() => onAdd(count)} variant="outline-secondary"> Agregar al Carrito </Button>
        </div>
    )
}

export default ItemCount