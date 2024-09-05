import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        {/* <div className="navbar-container">
        </div> */}
        <div className="navbar-logo">
          <span className="navbar-logo__title">JAKE</span>
          <img className="navbar-logo__img" src="./src/assets/logo-m.png" alt="" />
          <span className="navbar-logo__title">AKY</span>
        </div>
        <div className="navbar-links">
          <Link className="navbar-links__link" to="/">About</Link>
          <Link className="navbar-links__link" to="/">Contact</Link>
        </div>
        <div className="navbar-button">
          <Link className="dark-button" to="/">Blog</Link>
        </div>
      </div>
    </div>
  )
}
export default Navbar
