function Article({
  title,
  img
}) {
  return (
    <article className="article">
      <img src={img} />
      <section className="article__content">
        <h2 className="article__title">
          {title}
        </h2>
        <p className="article__description">
          {`PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`}
        </p>
        <button className="article__button">Read More</button>
      </section>
    </article>
  )
}

export default Article