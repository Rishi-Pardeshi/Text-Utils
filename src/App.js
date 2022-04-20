import "./App.css";
// import About from "./coponents/About";
import Navbar from "./coponents/Navbar";
import TextForm from "./coponents/TextForm";
import React, { useState } from "react";
import Alert from "./coponents/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#1a1a1a";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    // <Router>
      <>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About Us"
        ></Navbar>
        <Alert alert={alert}></Alert>
        <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze" ></TextForm>
        {/* <Routes>
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze" ></TextForm>} />
          <Route exact path="/about" element={<About />} />

        </Routes> */}
      </>
    // </Router>
  );
}

export default App;
