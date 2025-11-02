import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import Services from './components/Services.jsx'
import Doctors from './components/Doctors.jsx'
import AppointmentForm from './components/AppointmentForm.jsx'
import CustomerTestimonials from './components/CustomerTestimonials.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar />
   <Banner />
   <Services />
   <Doctors />
   <AppointmentForm />
   <CustomerTestimonials />
   <Footer/>
    </>
  )
}

export default App
