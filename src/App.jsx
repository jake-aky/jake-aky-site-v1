import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// C O M P S
import HomePage from "./__Home/HomePage"
import AboutPage from "./__About/AboutPage"
import Footer from "./__Global/Footer"
import Navbar from "./__Global/Navbar"
import ScrollToTop from "./__Global/ScrollToTop"
function App() {
  // Toggle dark / light mode
  const [darkTheme, setDarkTheme] = useState(true)
  const toggleTheme = () => {
    if (darkTheme) {
      setDarkTheme(false)
      document.body.classList.remove('dark-theme')
    } else if (!darkTheme) {
      setDarkTheme(true)
      document.body.classList.add('dark-theme')
    }
  }

  return (
    <Router>
      <ScrollToTop>
        <Navbar darkTheme={darkTheme} />
        <Routes>
          <Route exact path="/" element={<HomePage/>}  />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
        <Footer toggleTheme={toggleTheme} />
      </ScrollToTop>
    </Router>
  )
}

export default App
