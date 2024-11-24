function Main() {
  return (
    <main className="hero__container">
      <img src='logo.png' width='107' />
      <div className="hero__image">
        <img src="pizza.jpeg" alt="pizza" />
        <svg width="752" height="839" viewBox="0 0 752 839" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z" fill="#E23744" />
        </svg>
      </div>
      <div className="hero__content">
        <h1 className="hero__title">Discover the <span>Best</span> Food and Drinks</h1>
        <p>Naturally made Healthcare Products for the better care & support of your body</p>
        <button>Explore Now!</button>
      </div>
      <button className="contact"><a href="#">Get in Touch</a></button>
    </main>
  )
}

export default Main