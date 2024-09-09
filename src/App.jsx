import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// C O M P S
import HomePage from "./__Home/HomePage"
import AboutPage from "./__About/AboutPage"
function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}  />
        <Route exact path="/about" element={<AboutPage/>}  />
      </Routes>
    </Router>
  )
}

export default App
