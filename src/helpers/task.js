let productos = [
    { id: '1', name: 'polera', category: 'shirt', description: 'sport', stock: 19, image: '/src/components/img/polera.jpg' },
    { id: '2', name: 'polera', category: 'shirt', description: 'sport', stock: 16, image: '/src/components/img/polera.jpg' },
    { id: '3', name: 'polera', category: 'shirt', description: 'sport', stock: 13, image: '/src/components/img/polera.jpg' },
    { id: '4', name: 'zapatilla', category: 'shoes', description: 'sport', stock: 12, image: '/src/components/img/zapatilla.jpg' },
    { id: '5', name: 'zapatilla', category: 'shoes', description: 'sport', stock: 10, image: '/src/components/img/zapatilla.jpg' }
];

//objeto de tipo promesa
export const task = (id) => {
    if (id) {
        return new Promise((resolve, reject) => {
            //acciones
            setTimeout(() => {
                resolve(productos.find(producto => producto.id === id))
            }, 2000)
        })
    } else {
        return new Promise( ( resolve, reject) => {
            setTimeout( () => {
                resolve(productos)
            }, 2000)
        })
    }
}

