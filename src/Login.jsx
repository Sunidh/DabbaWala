import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { base_url } from './data/apiLinks';
import Logo1 from './Logo1';

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const doLogin = async () => {
        await axios.post(`${base_url}/api/login`, credentials)
            .then((response) => {
                localStorage.setItem('dabbawala_auth_token', JSON.stringify(response.data));
                console.log(response);
                navigate('/'); // Use the navigate function to redirect after successful login
            })
            .catch((error) => {
                console.error('Login error:', error.message);
            });
    };

    return (

            <div className='bg-danger py-1' style={{ minHeight: "100vh" }}>

                <div className="container my-5">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-5 d-none d-lg-block" style={{
                                    background: 'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}>
                                </div>
                                <div className="col-lg-7">
                                    <div className="p-5">

                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Login to <div className='d-inline-block'><Logo1/></div>!</h1>
                                        </div>
                                        <form className="user">

                                            <div className="form-group mb-3">
                                                <input type="email" className="form-control" name="username"
                                                    value={credentials.username}
                                                    onChange={handleChange}
                                                    placeholder="username" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input type="password" className="form-control" name="password"
                                                    value={credentials.password}
                                                    onChange={handleChange}
                                                    placeholder="Password" />
                                            </div>

                                            <div className="text-center">
                                                <button type="button" onClick={doLogin} className="btn btn-success mb-3">
                                                    Login
                                                </button>
                                            </div>
                                            <hr />
                                            <div className="text-center">
                                                <a href="index.html" className="btn btn-danger my-2 me-2">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-primary my-2">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            </div>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <Link to="/signup" className="small">Don't have account? Create now!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;
