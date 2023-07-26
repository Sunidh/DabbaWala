import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import resto from './image/photo-11.png'
import offerimg1 from './image/offerimg1.jpg'
import food4 from './image/food-4.jpg'
import resto1 from './image/resto1.jpg'
import axios from "axios"
import { base_url } from './apiLinks'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get(`${base_url}/resturants`).then(
      (response) => {
        setRestaurants(response.data);
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    )
  }, []);
  // useEffect(() => {
  //   axios.get(`${base_url}/api/all/all-restaurants`).then(
  //     (response) => {
  //       setRestaurants(response.data);
  //       console.log(response.data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  // }, []);
  return (
   <div>
    <Navbar/>
    <div className='container'>
      <div className="d-flex justify-content-between flex-wrap py-5">
        <div className=" text-start w-50 pt-5" style={{ width: "28rem" }}>
          <p className='pt-5' style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "80px" }}>Restaurants</p>
          <p className='pb-5 pt-3' style={{ color: "grey" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo perspiciatis ex vel rem quo </p>
          <select className='w-100 border-0 ' name="Choose a restaurant" id="" style={{ height: "40px", color: "#cfcfcf", fontSize: "20px", borderRadius: "5px" }}>
            <option defaultValue>Choose a restaurant</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

        </div>
        <div style={{ width: "28rem" }}>
          <img className='img-fluid ' src={resto} alt="" />
        </div>
      </div>

      <div className="offer w-100 py-5">
        <div className='d-flex text-start' style={{ backgroundImage: `url(${food4})`, backgroundSize: "100% 100%", height: "450px", paddingLeft: "20px" }}>

          <div className="w-50">
            {/* <div className="sticker pr-0 m-0 flex-start" style={{backgroundColor:"#f29f05",paddingLeft:"0"}}>
              This is sticker
            </div> */}
            <h1 className='pt-5 pr-0 m-0' style={{ color: "black", fontWeight: "700" }}>Today Special Offer</h1>
            <h2 className='pt-5 pr-0 m-0' style={{ color: "#f29f05", fontWeight: "bold" }}>Choose Two Lunches</h2>
            <h3 className='py-3 pr-0 m-0' style={{ color: "#f29f05", fontWeight: "bold" }}>Pay for one</h3>
            <div className='pt-3'>
              <button className="btn  " type="submit" style={{ border: "2px solid #f29f05", color: "#f29f05", height: "50px", fontSize: "20px" }}>ORDER&nbsp;NOW
                &nbsp; <i className='fa-solid fa-arrow-right' style={{ color: "#f29f05" }}></i>
              </button>
            </div>
          </div>
          <div className="w-50">

          </div>
        </div>
      </div>

      <div className="restos py-5">

        <div className="row ">
          {
            restaurants.length > 0 ? restaurants.map((restaurant, index) => {
              return (
                <div className="col-xl-6 col-md-6">
                  <Link to="/restaurantd" style={{textDecoration:"none"}}>
                    <div class="card shadow mb-4">
                      <div className="container">
                        <div class="text-start py-3">
                          <img style={{ height: "100px", width: "100px", borderRadius: "7px" }} src={resto1} alt="" />
                        </div>
                        <div className="pt-1 text-start">
                          <h4 style={{ fontWeight: "bold" }}>{restaurant.resturantName}</h4>
                        </div>
                        <div className="d-flex pb-1" style={{ color: "#f29f05" }}>
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
                          <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>
                            Dinner</button>

                        </div>

                        <div className="detail py-2 text-start" style={{ color: "grey" }}>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime consequatur. Illo tenetur quas neque accusantium modi, velit corrupti reprehenderit nesciunt, nam tempore illum minima inventore labore quam nemo nisi.

                          </p>
                        </div>

                      </div>
                    </div>
                  </Link>

                </div>
              );
            }) : "No Resturants AVailable"
          }

        </div>


      </div>

    </div>
    <Footer/>
   </div>
  )
}
