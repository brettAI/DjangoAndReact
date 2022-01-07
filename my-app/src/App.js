import logo from './logo.svg';
import './App.css';
// import FetchData from './components/FetchData';
import {useState, useEffect} from 'react'
import ArticleList from './components/ArticleList';



function App() {

  const [articles, setArticles] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:8000/api/articlesmod/`, {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 7246ecf9827b6a1a8903553e36522e2bd7cc8331'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  },[]  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <div className="container">
        <h3>Django and ReactJS Blog App</h3>
        <ArticleList articles={articles}/>
        {/* <ArticleList /> */}
        
        {/* <FetchData /> */}
      </div>
    </div>
  );
}

export default App;
