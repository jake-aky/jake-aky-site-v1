const ImageHeader = () => {
  return (
    <div className="image-header">
      <div className="image-header__container">
        <div className="image-header__text-container">
          <h1 className="heading-title" >Learn Front End Development at Your Pace</h1>
          <p className="heading-paragraph">Explore my guides & tips on how to achieve that pixel perfect finish you strive for. Being surrounded by world experts within the WordPress Development sector, I am learning how to do things the right way from the very beginning. Learn more about me, what I do or how to get in touch.</p>
          <button className="dark-button heading-button">Blog</button>
        </div>
        <div className="image-header__img-container">
          <img className="image-header__img" src="../src/assets/HomeAssets/headshot.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
export default ImageHeader
