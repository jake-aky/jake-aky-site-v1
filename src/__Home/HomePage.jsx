import HomeCards from "../Data/HomeCards.json"
import Navbar from "../__Global/Navbar"
import ImageHeader from "../__Global/ImageHeader"
import HeadingCards from "./HeadingCards"
import Footer from "../__Global/Footer"
const HomePage = () => {

  return (
    <>
      <Navbar />
      <ImageHeader
        title="Learn Front End Development at Your Pace"
        paragraph="Explore my guides & tips on how to achieve that pixel perfect finish you strive for. Being surrounded by world experts within the WordPress Development sector, I am learning how to do things the right way from the very beginning. Learn more about me, what I do or how to get in touch."
        btnText="Blog"
        btnLink="/"
        img="../src/assets/HomeAssets/headshot.jpg"
      />
      <HeadingCards CardData={HomeCards} />
      <Footer />
      <div className="test-100"></div>
    </>
  )
}
export default HomePage
