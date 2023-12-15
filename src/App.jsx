import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'
import { CartProvider } from './Context/cartContext'
import CheckOut from './components/CheckOut/CheckOut'
import Cart from './components/Cart/Cart'

function App() {

  return (
      <div className='App'>
        <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a nuestra tienda"} />} />
            <Route path='/category/:categorySku' element={<ItemListContainer/>}></Route>
            <Route path='/item/:itemSku' element={<ItemDetailsContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<CheckOut />}></Route>
            <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>}></Route>
          </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
  )
}

export default App
