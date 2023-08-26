import { useState } from "react";
import "./App.css";
import About from "./about/About";
import Navigation from "./components/Navigation";
import Myform from "./myform/Myform";
import Alert from "./alert/Alert";
import {Router as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [textl, settextl] = useState("dark");
  const [alermsg, setalermsg] = useState(null);

  const showalert = (message, type) => {
    setalermsg({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalermsg(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      settextl("light");
      document.body.style.backgroundColor = "Lightgreen";
      document.title = "Dark";
      showalert("Dark mode has been enabled", "danger");
    } else {
      document.title = "Lightgreen";
      setmode("light");
      settextl("dark");
      showalert("Light mode has been enabled", "info");
      document.body.style.backgroundColor = "Lightblue";
    }
  };

  return (
   <Router>
      <Navigation
        title="My Navbar"
        mode={mode}
        textl={textl}
        toggleMode={toggleMode}/>
      <Alert message={alermsg}></Alert>
      <div className="container .bg-dark">
        {/* axact word use to match exact path */}
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/home" element ={<Myform showalert={showalert}  mode={mode}></Myform>}></Route>
          <Route exact path="/" element ={<Myform showalert={showalert}  mode={mode}></Myform>}></Route>
        </Routes>
      </div>
   </Router>
   
   );
}

export default App;
