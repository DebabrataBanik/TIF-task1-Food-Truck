import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import About from "./components/About/About"
import Article from "./components/Article/Article"
import { useState } from 'react'

function App() {
  const articles = [
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

  const [currentPage, setCurrentPage] = useState(0); // Tracks the current "page"

  const articlesPerPage = 3; // Number of articles to show per page

  // Calculate the start and end indices for slicing
  const startIndex = currentPage * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;

  // Get the articles to display
  const displayedArticles = articles.slice(startIndex, endIndex);

  const handleNext = () => {
    // Go to the next set (wrap back to start if at the end)
    setCurrentPage((prev) => (prev + 1) % Math.ceil(articles.length / articlesPerPage));
  };

  const handlePrev = () => {
    // Go to the previous set (wrap to end if at the start)
    setCurrentPage((prev) => (prev - 1 + Math.ceil(articles.length / articlesPerPage)) % Math.ceil(articles.length / articlesPerPage));
  };
  return (
    <>
      <div className="wrapper">
        <Main />
        <About />

        <section className="article__container">
          <h2 className="article__heading">Latest Articles</h2>
          <div className="articles">
            {
              displayedArticles.map(
                (item, index) => <Article key={index} title={item.title} img={item.img} />
              )
            }
            <div className="pagination">
              <button onClick={handlePrev}>
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.72095 7.77569C4.99743 7.62218 5.08763 7.23144 4.90417 6.9819C4.85301 6.91229 4.06283 6.19571 3.14818 5.38947L1.48521 3.92355L3.14865 2.45747C4.06349 1.65111 4.85372 0.934394 4.90464 0.864786C4.96443 0.783069 4.99734 0.665494 4.99753 0.532858C4.99781 0.350399 4.97744 0.309267 4.81482 0.163722C4.64777 0.0142531 4.60967 -4.81606e-05 4.37925 -4.81606e-05H4.12677L2.06341 1.84618L0 3.69237V3.90394C0 4.02911 0.0314965 4.15811 0.0770903 4.21979C0.188787 4.37099 3.76126 7.57936 3.97942 7.72444C4.19386 7.86707 4.51632 7.88935 4.72095 7.77569Z" fill="#AFAFAF" />
                </svg>
              </button>
              <span>

                {currentPage + 1} / {Math.ceil(articles.length / articlesPerPage)}
              </span>
              <button onClick={handleNext}><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.279053 0.0724508C0.00256833 0.225969 -0.0876289 0.616706 0.0958301 0.866242C0.146987 0.93585 0.937167 1.65244 1.85182 2.45868L3.51479 3.92459L1.85135 5.39067C0.936507 6.19704 0.14628 6.91375 0.0953589 6.98336C0.0355732 7.06508 0.00266275 7.18265 0.00247416 7.31529C0.00219126 7.49775 0.0225599 7.53888 0.185179 7.68442C0.35223 7.83389 0.390326 7.84819 0.620746 7.84819H0.873233L2.93659 6.00196L5 4.15578V3.94421C5 3.81904 4.9685 3.69003 4.92291 3.62835C4.81121 3.47715 1.23874 0.268789 1.02058 0.123708C0.806139 -0.0189262 0.483683 -0.041201 0.279053 0.0724508Z" fill="#424961" />
              </svg>
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App