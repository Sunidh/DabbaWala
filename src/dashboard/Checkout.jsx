import React, { useState, useEffect } from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import Cart from './Cart';
import MyOrders from './MyOrders';
import { getLoggedInUser, isLoggedIn } from '../auth_cotroller/security';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {

  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('cart');

  useEffect(() => {
    if(!isLoggedIn()){
      alert('Please login to add to cart');
      navigate('/login');
    }
  }, []);
  

  const showResult = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'cart':
        return <Cart userId={getLoggedInUser()?.userId} />;
      case 'myorders':
        return <MyOrders />;
      default:
        return null;
    }
  };


  return (
    <div>
      <Navbar />
      <div className='container' style={{minHeight: '100vh'}}>
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className={`nav-link ${activePage === 'breakfast' ? 'active' : ''}`} href="#" style={{
              color: activePage === 'breakfast' ? '#f59f06' : 'black',
              fontWeight: activePage === 'breakfast' ? 'bold' : 'bold',
            }} onClick={() => showResult('cart')}>
              My Cart
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activePage === 'lunch' ? 'active' : ''}`} href="#" style={{
              color: activePage === 'lunch' ? '#f59f06' : 'black',
              fontWeight: activePage === 'lunch' ? 'bold' : 'bold',
            }} onClick={() => showResult('myorders')}>
              My Orders
            </a>
          </li>
          
        </ul>
        {renderPage()}
      </div>
      
      <Footer />
    </div>
  )
}
