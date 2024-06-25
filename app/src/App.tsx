import './App.css'

function App() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="splash-container">
        <div className="splash-content">
          <h1>Kerry Sabanty</h1>
          <p>I'm a full stack software engineer passionate about building web applications.</p>
          <button onClick={scrollToPortfolio} className="cta-button">View My Work</button>
        </div>
      </div>
      <div id="portfolio" className="portfolio-section">
        {
          <div>
            <a href="/skills">Skills</a>
            <a href="/resume">Experience</a>
            <a href="/contact">Contact</a>
          </div>
        }
      </div>
    </div>
  )
}

export default App
