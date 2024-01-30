import Login from "./Pages/LoginPage/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from "./Pages/SignUpPage/SignUp";
import BoardingPage from "./Pages/BoardingPage/BoardingPage";
import HouseDetails from "./Pages/HouseDetails/HouseDetails"
import HomePage from "./Pages/HomePage/HomePage";
import AdminPanel from "./Pages/AdminPanel/AdminPanel"
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
   <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Signup" element={<SignUp/>}></Route>
          <Route path="/BoardingPage" element={<BoardingPage/>}></Route>
          <Route path="/HouseDetails/:id" element={<HouseDetails />} />
          <Route path="/AdminPanel" element={<AdminPanel/>}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
        </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
