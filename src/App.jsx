import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import About from "./components/About/About"
import Article from "./components/Article/Article"

function App() {
  const article = [
    {
      title: 'Grilled Tomatoes at Home',
      img: 'tomatoes.jpeg'
    },
    {
      title: 'Snacks for Travel',
      img: 'peach.jpeg'
    },
    {
      title: 'Post-Workout Recipes',
      img: 'packed veges.jpeg'
    },
    {
      title: 'How to Grill Corn',
      img: 'how to.jpeg'
    },
    {
      title: 'Crunchwrap Supreme',
      img: 'crunchwrap.jpeg'
    },
    {
      title: 'Broccoli Cheese Soup',
      img: 'cheese.jpeg'
    }
  ]
  return (
    <>
      <div className="wrapper">
        <Main />
        <About />

        <section className="article__container">
          <h2 className="article__heading">Latest Articles</h2>
          <div className="articles">
            {
              article.map(
                (item, index) => <Article key={index} title={item.title} img={item.img} />
              )
            }
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App