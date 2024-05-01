import React, { useState } from 'react';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://my-brand-backend-tsc3.onrender.com/auth/login", {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const errors = await response.json();
                setErrorMessage(errors.message);
                return;
            }

            const data = await response.json();
            const token = data.token;
            localStorage.setItem("token", token);
            setErrorMessage('Login successful!');
            setTimeout(() => {
                setErrorMessage('');
            }, 6000);

            
            window.location.href = "/adminPanel";
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('An unexpected error occurred.');
        }
    };

    return (
        <div>
            <div id="nav-links" className="aside">   
                <div className="logo">
                    <span id="close"><i className="fa-solid fa-circle-xmark"></i></span>
                    My<span style={{ color: 'red' }}>_Brand</span>
                </div>
                <div id="navbar">
                    <ul className="nav">
                        <li><a href="#home" className="active"><i className="fa-solid fa-house"></i>Home</a></li>
                        <li><a href="#about"><i className="fa-solid fa-address-card"></i>About</a></li>
                        <li><a href="Admin_panel/admin.html"><i className="fa-solid fa-blog"></i>Article</a></li>
                        <li><a href="Admin_panel/admin.html"><i className="fa-solid fa-book"></i>Projects</a></li>
                        <li><a href="#contact"><i className="fa-solid fa-address-book"></i>Contact</a></li>
                    </ul>
                </div>
            </div>
            
            <section id="login">
                <div>
                    <form onSubmit={handleLogin}>
                        <h2>Login</h2>
                        {errorMessage && <div id="error-message" style={{ display: 'block' }}>{errorMessage}</div>}
                        <div className="field-set">
                            <label htmlFor="loginEmail">Email</label>
                            <input type="email" name="loginEmail" id="loginEmail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="field-set">
                            <label htmlFor="loginPassword">Password</label>
                            <input type="password" name="loginPassword" id="loginPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <a href="#">Forget Password?</a>
                        </div>
                        <button type="submit">Login</button>
                        <div className="login-options">
                            <h5 style={{ textAlign: 'center' }}>Login By</h5>
                            <div className="icons-options">
                                <div className="google">
                                    <i className="ri-google-line"></i> Signin With Google
                                </div>
                                <div className="github">
                                    <i className="ri-github-fill"></i> Signin With Github
                                </div>
                            </div>
                        </div>
                        <p className="sign-up">Don’t have an account? <a href="./register.html">Signup now</a></p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
