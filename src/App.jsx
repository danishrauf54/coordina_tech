import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesTriple from './components/FeaturesTriple'
import TemporaryWorks from './components/TemporaryWorks'
import Organize from './components/Organize'
import ValueGrid from './components/ValueGrid'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

// Pages
import About from './pages/About'
import Platforms from './pages/Platforms'
import Resources from './pages/Resources'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20"> {/* padding so content not hidden under fixed navbar */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FeaturesTriple />
                <TemporaryWorks />
                <Organize />
                <ValueGrid />
                <FAQ />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
