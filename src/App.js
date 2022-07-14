
import './App.css';
import Home from './pages/Home'
import {BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import SearchPages from './pages/SearchPages';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/"
          element={<Home/>}
          />
          <Route path = "/search"
          element={<SearchPages/>}
          />
        </Routes>
      </div>
    </Router>
      
  );
}

export default App;
