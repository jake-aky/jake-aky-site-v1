import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
	const [toggleBurger, setToggleBurger] = useState(false)
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if(width <= 864) {
			setToggleBurger(true)
		} else {
			setToggleBurger(false)
		}

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <Link to="/">
            <img className="navbar-logo__img" src="./src/assets/logo-m.png" alt="" />
          </Link>
        </div>
        {toggleBurger ?
        <div>
          <FontAwesomeIcon onClick={() => setToggleDropdown(!toggleDropdown)} icon={faBars} />
        </div>
        :
        <>
          <div className="navbar-links">
            <Link className="regular-link" to="/about">About</Link>
            <Link className="regular-link" to="/">Contact</Link>
          </div>
          <div className="navbar-button">
            <Link className="dark-button" to="/">Blog</Link>
          </div>
        </>
        }
      </div>
    </div>
  )
}
export default Navbar
