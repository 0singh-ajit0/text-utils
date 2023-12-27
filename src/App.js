import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (alertType, alertHeading, alertMessage) => {
    setAlert({
      type: alertType,
      heading: alertHeading,
      message: alertMessage
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(27, 28, 28)";
      document.body.style.color = "#fff";
      showAlert("success", "Success", "Switched to dark mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      showAlert("success", "Success", "Switched to light mode");
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alertMessage="This is an alert" alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
