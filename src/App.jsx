import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartWidget from './components/CartWidget/CartWidget'


function App() {
  const [count, setCount] = useState(0)


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryid' element={<ItemListContainer />} />
          <Route path='/detail/:detailid' element={<ItemDetailContainer/>} />
          <Route path='/carrito' element={<CartWidget/>} />
          {/* <Route path='/notfound' element={<NotFound />} /> */}

          {/*'para notFound'*/}
          {/* <Route path='*' element={<Navigate to='/'/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


