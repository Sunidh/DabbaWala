import React from 'react'
import Logo1 from './Logo1'

export default function Footer() {
  return (
    <div className='footer' style={{ backgroundColor: "#363636" }}>
      <div className="container py-5">

      <div className="row">
        <div className="col-xl-6 col-md-6 mb-4 px-0">
          <div className="card h-100  border-0">
            <div class="card-body" style={{ backgroundColor: "#363636" }}>
            <div className="text-start">
            <div className='d-flex'>

              <div className="" style={{ color: "#f29f05", fontSize: "30px", marginRight: "7px" }}>
                <i className="fa-solid fa-bowl-food"></i>
              </div>
              <div>
                <h5 style={{ fontWeight: "bold", marginTop: "10px", color: "white" }}>DABBA<span style={{ color: "#f29f05" }}>WALLA</span></h5>
              </div>

            </div>
            <p style={{ fontSize: "55px", fontWeight: "bold", lineHeight: "80px", color: "white" }}>The Best<br /> Restaurants in<br /> Your Home</p>

            <p style={{ color: "rgb(210,210,210)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos fugiat maxime ex repellat molestias. Minima debitis aliquam autem dignissimos. Obcaecati dolorem illo, sapiente alias quo voluptas aperiam repellat fugit.
            </p>
          </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-6 mb-4 px-0">
          <div className="card h-100 border-0">
            <div className="card-body"  style={{ backgroundColor: "#363636" }}>
            <div className="text-start contact" style={{ color: "grey" }}>
            <p style={{ color: "grey", fontWeight: "bolder", fontSize: "20px" }}>CONTACTS</p>

            <div className='d-flex'>
              <i className="fa-solid fa-location-dot mt-1" style={{ marginRight: "8px", fontSize: "20px" }}></i>
              <p className='pl-3' style={{ color: "rgb(210,210,210)", fontSize: "20px" }}>Ambala, Haryana ,133207 ,India</p>

            </div>
            <hr style={{ color: "white" }} />

            <div className="d-flex">
              <i className="fa-solid fa-envelope mt-1" style={{ marginRight: "8px" }}></i>
              <p style={{ color: "rgb(210,210,210)", fontSize: "15px" }}>dabbawala.info@gmail.com</p>
            </div>
            <div className="d-flex" >
              <i className="fa-solid fa-phone mt-1" style={{ marginRight: "8px" }}></i>
              <p style={{ color: "rgb(210,210,210)", fontSize: "15px" }}>+91 9113170477</p>
            </div>
            <div className="media-menu " >
              <ul className='d-flex text-start m-0 p-0' style={{ listStyleType: "none", justifyContent: "flex-start", }}>
                <li className='mr-1' style={{ borderRadius: "50%", border: "1px solid rgb(210,210,210)", height: "40px", width: "40px", textAlign: "center", fontSize: "20px", marginRight: "16px" }}> <i className="fa-brands fa-facebook-f my-2" ></i>

                </li>
                <li className='mr-1' style={{ borderRadius: "50%", border: "1px solid rgb(210,210,210)", height: "40px", width: "40px", textAlign: "center", fontSize: "20px", marginRight: "16px" }}><i className="fa-brands fa-instagram my-2"></i></li>
                <li className='mr-1' style={{ borderRadius: "50%", border: "1px solid rgb(210,210,210)", height: "40px", width: "40px", textAlign: "center", fontSize: "20px", marginRight: "16px" }}> <i className="fa-brands fa-twitter my-2"></i></li>
              </ul>

            </div>
          </div>
            </div>
          </div>
        </div>
      </div>


        
        <footer>
          <hr style={{ color: "grey" }} />
          <div className="d-flex justify-content-between flex-wrap ">
            <div className='copyright' style={{ color: "grey" }}>
              Copyright © 2023. Dabbawalla. All rights reserved.
            </div>
            <div style={{ color: "grey" }}>
              Privacy Policy <span style={{ marginRight: "16px" }} />   Terms & Services
            </div>
          </div>

        </footer>

      </div>
      
    </div>
  )
}
