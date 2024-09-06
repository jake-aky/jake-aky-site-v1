import LinkCards from "./LinkCards"

const HeadingCards = ({CardData}) => {
  return (
    <div className="heading-cards">
      <h2 className="heading-cards__title">Features</h2>
      <p className="heading-cards__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores unde impedit, neque labore pariatur rem? Similique optio rem illo cupiditate est, consequatur dolorem accusamus nobis repellat veritatis possimus, dolores accusantium eaque ipsum voluptate architecto, quaerat obcaecati deleniti? Sit amet voluptas accusantium, nemo similique soluta numquam.</p>
      <LinkCards CardData={CardData} />
    </div>
  )
}
export default HeadingCards
