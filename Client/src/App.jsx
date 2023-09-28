import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing, Home } from "./views";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/checkin" && location.pathname !== "/home" &&<NavBar/>}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
   </div>
  );
}

export default App;