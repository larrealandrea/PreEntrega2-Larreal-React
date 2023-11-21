import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'


function App() {

  return (
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a nuestra tienda"} />}></Route>
            <Route path='/categories/:categorySku' element={<ItemListContainer/>}></Route>
            <Route path='/categories/:categorySku/:itemSku' element={<ItemDetailsContainer/>}></Route>
            <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
