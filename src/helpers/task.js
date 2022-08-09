let productos = [
    { id: '1', name: 'polera 1', category: 'shirt', description: 'sport', stock: 19, image: '/src/components/img/polera.jpg', price: 1000 },
    { id: '2', name: 'polera 2', category: 'shirt', description: 'sport', stock: 16, image: '/src/components/img/polera.jpg', price: 1500 },
    { id: '3', name: 'polera 3', category: 'shirt', description: 'sport', stock: 13, image: '/src/components/img/polera.jpg', price: 2000 },
    { id: '4', name: 'zapatilla 1', category: 'shoes', description: 'sport', stock: 12, image: '/src/components/img/zapatilla.jpg', price: 60000 },
    { id: '5', name: 'zapatilla 2', category: 'shoes', description: 'sport', stock: 10, image: '/src/components/img/zapatilla.jpg', price: 70000 }
];

//objeto de tipo promesa
export const task = (id) => {

        return new Promise((resolve, reject) => {
            //acciones
            setTimeout(() => {
                if (id) {
                    resolve(productos.find(producto => producto.id === id))
                } else {
                    resolve(productos)
                }
            }, 1000)
        })
}

