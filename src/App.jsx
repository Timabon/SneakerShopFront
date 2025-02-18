import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListUsersComponent from './components/ListUsersComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserComponent from './components/UserComponent'
import ListProductsComponent from './components/ListProductsComponent'
import ProductPageComponent from './components/ProductPageComponent'


function App() {


  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path='/users' element = { <ListUsersComponent/>}/>
          <Route path='/' element = { <ListUsersComponent/>}/>
          <Route path='/create-user' element = { <UserComponent/>}/>
          <Route path='/products' element = {<ListProductsComponent/>}/>
          <Route path='/products/:id' element = {<ProductPageComponent/>}/>
        </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
