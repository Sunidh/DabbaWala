import React from 'react'
import { useState } from 'react'
import restaurant from './image/restaurant-1.jpg'
import Contact from './Contact'
import resto1 from './image/resto1.jpg'
import Breakfast  from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'
export default function Restaurantd() {
  const [activePage, setActivePage] = useState('breakfast');

  const showResult = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'breakfast':
        return <Breakfast />;
      case 'lunch':
        return <Lunch />;
      case 'dinner':
        return <Dinner />;
      default:
        return null;
    }
  };

  
  
  return (
    
    <div className='container'>
       <div className="d-flex justify-content-between flex-wrap py-5">
          <div className=" text-start w-50 py-5" style={{ width: "28rem" }}>
          <div class="card  mb-4 border-0 " style={{backgroundColor:"transparent"}}>
              <div className="container">
                
                <div class="text-start pt-3">
                  <img style={{ height: "100px", width: "100px", borderRadius: "7px" }} src={resto1} alt="" />
                </div>
                <div className="pt-1 text-start">
                  <p style={{ fontWeight: "bold",fontSize:"50px" }}>Patna Mess Services</p>
                </div>
                <div className="rate">
                    <p style={{color:"grey"}}>Ratings</p>
                </div>
                <div className="d-flex pb-4 " style={{ color: "#f29f05" }}>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
               
                <div className='d-flex py-2'>
                  <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>
                    Breakfast
                  </button>
                  <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>Lunch</button>
                  <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>Dinner</button>

                </div>

                <div className="detail py-2 text-start" style={{ color: "grey" }}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime consequatur. Illo tenetur quas neque accusantium modi, velit corrupti reprehenderit nesciunt, nam tempore illum minima inventore labore quam nemo nisi.

                  </p>
                </div>

              </div>
            </div>
           
          </div>
          <div style={{ width: "28rem" }}>
            <img className='img-fluid' src={restaurant} alt="" style={{borderRadius:"8px"}} />
          </div>
        </div>

        <div className="restonav py-5">
        <ul class="nav nav-underline">
          <li class="nav-item">
            <a class={`nav-link ${activePage === 'breakfast' ? 'active' : ''}`} href="#" style={{  color: activePage === 'breakfast' ? '#f59f06' : 'black',
                fontWeight: activePage === 'breakfast' ? 'bold' : 'bold',}} onClick={() => showResult('breakfast')}>
              Breakfast
            </a>
          </li>
          <li class="nav-item">
            <a class={`nav-link ${activePage === 'lunch' ? 'active' : ''}`} href="#" style={{ color: activePage === 'lunch' ? '#f59f06' : 'black',
                fontWeight: activePage === 'lunch' ? 'bold' : 'bold', }} onClick={() => showResult('lunch')}>
              Lunch
            </a>
          </li>
          <li class="nav-item">
            <a class={`nav-link ${activePage === 'dinner' ? 'active' : ''}`} href="#" style={{ color: activePage === 'dinner' ? '#f59f06' : 'black',
                fontWeight: activePage === 'dinner' ? 'bold' : 'bold', }} onClick={() => showResult('dinner')}>
              Dinner
            </a>
          </li>
        </ul>
      </div>

      <div id="result">{renderPage()}</div>
    </div>
  );
}
