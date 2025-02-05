import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListUsersComponent from './components/ListUsersComponent'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import UserComponent from './components/UserComponent'


function App() {


  return (
    <>
    <Router>
      <HeaderComponent/>
        <Routes>
          <Route path='/users' element = { <ListUsersComponent/>}/>
          <Route path='/' element = { <ListUsersComponent/>}/>
          <Route path='/create-user' element = { <UserComponent/>}/>
        </Routes>
      <FooterComponent/>
    </Router>
    </>
  )
}

export default App
