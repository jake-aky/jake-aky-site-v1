import { useState } from "react"
import Footer from "../__Global/Footer"
import HeadingBlock from "../__Global/HeadingBlock"
import ImageHeader from "../__Global/ImageHeader"
import Navbar from "../__Global/Navbar"
import Article from "./Article"

const AboutPage = () => {
  //Set image header to fullscreen
  const [imgHeaderFullscreen, setImgHeaderFullscreen] = useState(true)
  return (
    <>
      <Navbar />
      <ImageHeader
        title="Hi, I&apos;m Jake Aky! "
        paragraph="Im a junior font-end-developer specialising within the wordpress sector."
        btnText="Blog"
        btnLink="/"
        img="../src/assets/PersonalImages/headshot.jpg"
        makeFullscreen={imgHeaderFullscreen}
      />
      <Article />
      {/* <div className='article-languages__container'>
        <img className='article__language' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="" />
        <img className='article__language' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
        <img className='article__language' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
        <img className='article__language' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
        <img className='article__language' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        <img className='article__language' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
        <img className='article__language' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
      </div> */}
      <Footer />
    </>
  )
}
export default AboutPage
