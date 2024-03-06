import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home"



// import SignUp from './Components/SignUp'; // Import SignUp component


function App() {
  const menuItems = [
    { day: 'Monday', breakfast: 'paratha tea', lunch: 'Rice Paneer Salad', dinner: 'Rice Paneer Salad' },
    { day: 'Tuesday', breakfast: 'paratha tea', lunch: 'Rice Paneer Salad Soup', dinner: 'Grilled Rice Paneer Salad' },
    { day: 'Wednesday', breakfast: 'paratha tea', lunch: 'Sandwiches Rice Paneer Salad', dinner: 'Rice Paneer Salad' },
    { day: 'Thursday', breakfast: 'paratha tea', lunch: 'Rice Paneer Salad', dinner: 'Stir-fry Rice Paneer Salad' },
    { day: 'Friday', breakfast: 'paratha tea', lunch: 'Rice Paneer Salad', dinner: 'Stir-fry Rice Paneer Salad' },
    { day: 'Saturday', breakfast: 'paratha tea', lunch: 'Rice Paneer Salad', dinner: 'Stir-fry Rice Paneer Salad' },
    { day: 'Sunday', breakfast: 'paratha tea', lunch: 'Rice Paneer Salad', dinner: 'Stir-fry Rice Paneer Salad' },
    // Add more items for the rest of the week...
  ];
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Home/>}/>
        {/* <Route path="/menu" element={<WeeklyMenu menuItems={menuItems} />}/>
        <Route path='/complaint' element={<ComplaintPage/>}/> */}
        </Routes>
      </Router>
    </div>
  );

}

export default App;
