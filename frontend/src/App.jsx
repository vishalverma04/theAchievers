import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home"


// import SignUp from './Components/SignUp'; // Import SignUp component

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
