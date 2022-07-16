import React                                    from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home                                     from "./pages/Home/Home";
import Header                                   from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
      <footer style={{marginTop: "1rem"}}>
        <p>Coded with &#10084;&#65039; by IakMastro &copy; 2022</p>
      </footer>
    </div>
  );
}

export default App;