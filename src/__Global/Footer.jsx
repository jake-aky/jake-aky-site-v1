import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="footer-inspo">
          <h4>Inspiration</h4>
          <a href="">Olivier Larose</a>
          <a href="">Wordpress</a>
        </div>
        <div className="footer-info">
          <div>
            <h2>Feel free to check out my other socials that I post on regularly</h2>
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
