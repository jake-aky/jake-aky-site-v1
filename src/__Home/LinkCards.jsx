const LinkCards = ({CardData}) => {
  return (
    <div className="link-cards">
      <div className="link-cards__container">
        {CardData.map((card, key) => {
          return (
            <div key={key} className="link-card">
              <h3 className="link-card__title">{card.icon} {card.title}</h3>
              <p className="link-card__paragraph">{card.paragraph}</p>
              <button className="dark-button link-card__button">{card.btnText}</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default LinkCards
