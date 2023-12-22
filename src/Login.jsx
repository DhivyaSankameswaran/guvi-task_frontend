// import React, { useState } from "react";
// import Axios from 'axios';
// import { useNavigate } from "react-router-dom";  // Import useNavigate hook

// export const Login = (props) => {
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
// //   const navigate = useNavigate();  // Initialize useNavigate hook

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const { data } = await Axios.post('http://localhost:5000/api/add/signin', {
//         email,  // Use email and pass state directly
//         password: pass
//       });
//     //   navigate('/profile');
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

//   return (
//     <div className="auth-form-container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
        // <label htmlFor="email">email</label>
        // <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        // <label htmlFor="password">password</label>
        // <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        // <button type="submit">Log In</button>
//       </form>
//       <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
//     </div>
//   );
// };

// Login.jsx
import React, { useState } from "react";
import Axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import "./App.css";
import { UseStore } from "./store";
export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const {setEmailStore} = UseStore();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await Axios.post('http://localhost:5000/api/add/signin', {
        email,
        password: pass
      });

      // If login is successful, navigate to the /welcome route and pass the email as state
      navigate('/welcome', { state: { email } });
      setEmailStore({email})
    } catch (err) {
      console.log("error", err);
    }
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account?</p>
      <button><Link to="/" className="link-btn">Register here.</Link></button>
      
    </div>
  );
};

