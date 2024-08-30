import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// C O M P S
import HomePage from "./Home/HomePage"
function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}  />
      </Routes>
    </Router>
  )
}

export default App
