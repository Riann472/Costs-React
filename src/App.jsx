import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


import Container from './components/layout/Container'

export default function App() {

  return (
    <Router>
      <Navbar />

      <Container customClass='min-height'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/company' element={<Company />} />
          <Route path='/newproject' element={<NewProject btnText="Criar Projeto" />} />

        </Routes>
      </Container>
    <Footer />
    </Router>
  )
}


