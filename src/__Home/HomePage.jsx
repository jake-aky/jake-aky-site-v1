import HomeCards from "../Data/HomeCards.json"
import ImageHeader from "../__Global/ImageHeader"
import HeadingBlock from "../__Global/HeadingBlock"
import LinkCards from "./LinkCards"
const HomePage = () => {

  return (
    <>
      <ImageHeader
        title="Learn Front End Development at Your Pace"
        paragraph="Explore my guides & tips on how to achieve that pixel perfect finish you strive for. Being surrounded by world experts within the WordPress Development sector, I am learning how to do things the right way from the very beginning. Learn more about me, what I do or how to get in touch."
        btnText="Blog"
        btnLink="/"
        img="../src/assets/PersonalImages/headshot.jpg"
      />
      <HeadingBlock
        title="Features"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores unde impedit, neque labore pariatur rem? Similique optio rem illo cupiditate est, consequatur dolorem accusamus nobis repellat veritatis possimus, dolores accusantium eaque ipsum voluptate architecto, quaerat obcaecati deleniti? Sit amet voluptas accusantium, nemo similique soluta numquam."
      />
      <LinkCards CardData={HomeCards} />
    </>
  )
}
export default HomePage
