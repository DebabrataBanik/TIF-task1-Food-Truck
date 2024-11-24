function About() {
  const para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
  return (

    <section className="about__container" >
      <div className="about__image">
        <img src="ingredients.jpeg" alt="ingredients" />
      </div>
      <aside className="about__content">
        <h2 className="about__title">About Us</h2>
        <p className="about__description"> {para}</p>
        <button>Read More</button>
      </aside>
    </section>
  )
}

export default About