import './App.css';
import HomePage from './Components/HomePage'; 
import BookingPage from './Components/BookingPage';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import ConfirmedBooking from './Components/ConfirmedBooking';




function App() {
  return (
    <Router>

      <ConfirmedBooking/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/reservation" element={<BookingPage/>}></Route>
      </Routes>
    </Router>
    // <Router>
    //   <Routes> 
    //     <Route path="/" element={<HomePage/>}></Route>
    //     <Route path="/reservation" element={<BookingPage/>}></Route>
    //   </Routes>
    // </Router>
    );
}

export default App;
