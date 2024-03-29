import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartWidget from './components/CartWidget/CartWidget'
import CartContextProvider from './context/CartContext/CartContext'
import Cart from './components/Cart/Cart'
import Hero from './components/Hero/Hero'
import DomusTeam from './components/DomusTeam/DomusTeam'
import Formulary from './components/Formulary/Formulary'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)


  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route index path='/' element={ <Hero/> } />
            <Route path='/category/:categoryid' element={ <ItemListContainer/> } />
            <Route path='/rentorsell/:rentorsellid' element={ <ItemListContainer/> } />
            <Route path='/detail/:detailid' element={ <ItemDetailContainer/> } />
            <Route path='/team' element={ <DomusTeam/> } />
            <Route path='/products' element={ <ItemListContainer/> } />
            <Route path='/cart' element={<Cart />} />
            <Route path='/formulary' element={ <Formulary/> } />
            {/* <Route path='/notfound' element={<NotFound />} /> */}

            {/*'para notFound'*/}
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
          <Footer />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App


