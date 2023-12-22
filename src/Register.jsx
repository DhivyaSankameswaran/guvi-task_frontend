import React, { useState } from "react";
import Axios from 'axios';
import { Link,useNavigate } from "react-router-dom";

export const Register = (props) => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [form, setForm] = useState({
        errors: {
            name: '',
            email: '',
            password: '',
        },
    });

    async function handleSubmit(e) {
        
        e.preventDefault();
        try {
            const { data } = await Axios.post('http://localhost:5000/api/add/create', {
                value: {
                    name,
                    email,
                    password: pass,
                }
            });
            console.log("Account Login Success");
            history('/login');
        } catch (err) {
            console.log(err);
            // Assuming that the error response contains details about each field
            if (err.response && err.response.data && err.response.data.errors) {
                const { errors } = err.response.data;
                setForm(prevForm => ({
                    ...prevForm,
                    errors: {
                        name: errors.name || '',
                        email: errors.email || '',
                        password: errors.password || '',
                    },
                }));
            }
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="name"
                />
                <span className="error-message">{form.errors.name}</span>

                <label htmlFor="email">Email id</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <span className="error-message">{form.errors.email}</span>

                <label htmlFor="password">Password</label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <span className="error-message">{form.errors.password}</span>

                <button type="submit">Register</button>
            </form>
            <p> Already have an account?</p>
            <button className="link-btn"><Link to='/login'>
            Login here.
            </Link>
                
            </button>
        </div>
    );
};
