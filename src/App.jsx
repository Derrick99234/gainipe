import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import "./App.css"
import About from './pages/About/About'
import Register from './pages/Authentication/Register'
import Login from './pages/Authentication/Login'
import Contact from './pages/Contact/Contact'
import FAQs from './pages/FAQ\'S/FAQ\'s'
import Dashboard from './pages/Dashboard/Dashboard'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/help' element={<FAQs />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
