// import React, { useState } from "react";
// import logo from './logo.svg';
// import './App.css';
// import { Login } from "./Login";
// import { Register } from "./Register";

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <div className="App">
//       {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//       }
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import Welcome from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
