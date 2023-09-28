import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import  Landing  from "./view/Landing/Landing";
import  Home from "./view/Home/Home";
//import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();
  console.log("loaction es: ", location);
  return (
    <div className="App">
      {/* {location.pathname !== "/" && location.pathname !== "/checkin" && location.pathname !== "/home" &&<NavBar/>} */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
   </div>
  );
}

export default App;