import './App.css';
import HomePage from './Components/HomePage'; 
import BookingPage from './Components/BookingPage';




import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Chicago from './Components/Chicago';




function App() {
  return (
    <Router>
      <BookingPage/>
      {/* <HomePage/> */}
      <Routes> 
        <Route path="/" element={<HomePage/>}></Route>
        {/* <Route path="/contact" element={< />}></Route> */}
      </Routes>
    </Router>
    );
}

export default App;
