import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <h4 className="footer-links__title">Navigation</h4>
        <Link className="footer__link regular-link" to="/">Home</Link>
        <Link className="footer__link regular-link" to="/">About</Link>
        <Link className="footer__link regular-link" to="/">Blog</Link>
        <Link className="footer__link regular-link" to="/">Contact</Link>
      </div>
      <div className="footer-links">
        <h4 className="footer-links__title">Inspiration</h4>
        <a className="footer__link regular-link" href="">Olivier Larose</a>
        <a className="footer__link regular-link" href="">Wordpress</a>
      </div>
      <div className="footer-socials">
        <div className="footer-info__container">
          <h2 className="footer__info">Feel free to check out my other socials that I post on regularly</h2>
        </div>
        <div className="footer-brands__container">
          <FontAwesomeIcon className="footer__brand" icon={faGithub} />
          <FontAwesomeIcon className="footer__brand" icon={faInstagram} />
          <FontAwesomeIcon className="footer__brand" icon={faLinkedin} />
        </div>
      </div>
    </div>
  )
}
export default Footer
