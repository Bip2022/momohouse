
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Momo from './Pages/Momo'
import About from './Pages/About'
import Menu from './Pages/Menu'
import AllergyAdvice from './Pages/AllergyAdvice'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import ProductDescription from './Pages/ProductDescription'
import Payment from './Pages/Payment'







function App() {


  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Momo />} />
        <Route path="/about" element={<About />} />
        <Route path="/allergyadvice" element={<AllergyAdvice />} />
       
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productdescription/:id" element={<ProductDescription />} />
        <Route path ="/payment" element={<Payment/>} />
       

      </Routes>

  <Footer/>

    </>
  )
}


export default App
