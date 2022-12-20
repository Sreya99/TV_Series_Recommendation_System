import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./views/Homepage";
import AboutPage from "./views/Aboutpage";
import SinglePage from "./views/Singlepage";
import Login from "./views/Login";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/singleshow/:id" element={<SinglePage/>} />
          <Route path="/login" element={<Login/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;