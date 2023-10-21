import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Container customClass='min_height'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/newproject' element={<NewProject/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
        </Container>
       <Footer/>  
      </BrowserRouter>
    </>  
  )
}

export default App