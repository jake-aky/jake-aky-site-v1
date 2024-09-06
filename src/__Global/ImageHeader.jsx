import { Link } from "react-router-dom"

const ImageHeader = ({btnLink,btnText,paragraph,title, img}) => {

  return (
    <div className="image-header">
      <div className="image-header__container">
        <div className="image-header__text-container">
          <h1 className="heading-title" >{title}</h1>
          <p className="heading-paragraph">{paragraph}</p>
          <Link>
            <button to={btnLink} className="dark-button heading-button">{btnText}</button>
          </Link>
        </div>
        <div className="image-header__img-container">
          <img className="image-header__img" src={img} alt="" />
        </div>
      </div>
    </div>
  )
}
export default ImageHeader
