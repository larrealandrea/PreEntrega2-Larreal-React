import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'
// import { createTheme, ThemeProvider } from '@mui/material/styles';


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: purple[300],
//     },
//     secondary: {
//       main: orange['A200'],
//     },
//   },
// });

function App() {

  return (
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/categories/:categorySku' element={<ItemListContainer/>}></Route>
            <Route path='/Item/:itemSku' element={<ItemDetailsContainer/>}></Route>
            <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
