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

    if(width <= 632) {
			setToggleBurger(true)
		} else {
			setToggleBurger(false)
		}

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        {/* <div className="navbar-container">
        </div> */}
        <div className="navbar-logo">
          <img className="navbar-logo__img" src="./src/assets/bonsai.jpg" alt="" />
          {/* <span className="navbar-logo__title">AKY</span> */}
        </div>
        {toggleBurger ?
        <div>
          <FontAwesomeIcon onClick={() => setToggleDropdown(!toggleDropdown)} icon={faBars} />
        </div>
        :
        <>
          <div className="navbar-links">
            <Link className="navbar-links__link" to="/">About</Link>
            <Link className="navbar-links__link" to="/">Contact</Link>
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
