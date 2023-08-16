import React, {useEffect, useState} from 'react';
import Logo1 from './Logo1'
import { Link, BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { getLoggedInUser, isLoggedIn, isSessionValid, logout } from './auth_cotroller/security';
export default function Navbar() {
  const navigate = useNavigate();
  const [isLogged, setIsLoggedIn] = useState({});
  useEffect(()=>{
    setIsLoggedIn(isLoggedIn());
  },[isLogged]);

  useEffect(() => {
    const fetchSession = async () => {
      console.log("fetch session:"+isLoggedIn())
      if(isLoggedIn()){
        await isSessionValid();
        if(!isLoggedIn()){
          alert("Your session has expired. Please login again")
        }
        setIsLoggedIn(isLoggedIn());
        console.log("login: "+isLoggedIn());
      }
    }
    fetchSession();
  }, []);

  const user = getLoggedInUser();
  const logoutUser = () => {
    logout();
    setIsLoggedIn(isLoggedIn());
  }
  return (
    <div className='container'>
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg bg-body-transparent">
          <div className="container-fluid px-0">

            <Link to="/" style={{ textDecoration: "none", color: "black" }}><Logo1 /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto ms-5 my-2 my-lg-0 navbar-nav-scroll" style={{ listStyleType: "none", fontWeight: "600" }}>
                <li className="nav-item">

                  <Link to="/" className="nav-link active" > Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link "> About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact Us</Link>
                </li>
                <li className="nav-item dropdown" >
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Restaurants
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to="/restaurants" className="dropdown-item" href="#">All Restaurants</Link></li>
                    <li><a className="dropdown-item" href="#">Monthly Subscription</a></li>

                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

              </ul>
              <div className="d-flex" role="search">
                {
                  isLogged ? 
                  <div className='d-flex'>
                    <Link to="/checkout"> <i className="fa-solid fa-bag-shopping me-4" style={{ fontSize: '30px', color: '#f29f05' }}></i></Link>
                    <div>{user? user.firstName+" " + user.lastName: ""}</div>
                    <button onClick={logoutUser} style={{ backgroundColor: "#f29f05" }} className="btn text-white ms-2">Logout</button>
                  </div> 
                  : 
                  <div className="d-flex">
                  <button className="btn text-white me-2" style={{ backgroundColor: "#f29f05" }} onClick={() => navigate("/login")}> Login </button>
                  <button className="btn text-white" style={{ backgroundColor: "#f29f05" }} onClick={() => navigate("/signup")}>
                  Sign&nbsp;Up</button>
                  </div>
                }
                
                
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
