
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
import Payment from './Pages/Payment'
import ProductDescription from './Pages/ProductDescription'
import Profile from './Pages/Profile'
import Success from './Pages/Success'
import Failure from "./Pages/Failure";
import Protected from './Pages/Protected'






function App() {


  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Momo />} />
        <Route path="/about" element={<About />} />
        <Route path="/allergyadvice" element={<AllergyAdvice />} />
        <Route path="/menu" element={<Protected Comp={Menu} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={< Protected Comp={Cart}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productdescription/:id" element={<Protected Comp={ProductDescription}/>} />
        <Route path ="/payment" element={<Protected Comp={Payment}/>} />
        <Route path ="/success" element={<Protected Comp={Success}/>} />
        <Route path="/failure" element={<Protected Comp={Failure}/>}/>
        <Route path="/profile" element={<Protected Comp={Profile}/>}/>
      </Routes>
  <Footer/>

    </>
  )
}


export default App
