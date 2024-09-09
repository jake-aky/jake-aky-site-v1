const HeadingBlock = ({title,description}) => {
  return (
    <div className="heading-block">
      <h2 className="heading-block__title">{title}</h2>
      <p className="heading-block__paragraph">{description}</p>
    </div>
  )
}
export default HeadingBlock
